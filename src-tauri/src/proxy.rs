use anyhow::Result;
use base64;
use futures;
use hyper::header::HeaderName;
use hyper::{self, body::Buf, http::Method};
use log;
use serde;
use serde_json;
use std::collections::HashMap;
use std::default::Default;
use std::env;
use std::string::String;
use std::{convert::Infallible, net::SocketAddr};
use url::Url;

#[derive(serde::Serialize, serde::Deserialize, Debug)]
struct HoppAuth {
  username: String,
  password: String,
}

#[derive(serde::Serialize, serde::Deserialize, Debug)]
#[serde(rename_all = "camelCase")]
struct HoppRequest {
  body: Option<String>,
  url: String,
  method: String,
  access_token: Option<String>,
  auth: Option<HoppAuth>,
  wants_binary: Option<bool>,
  headers: HashMap<String, String>,
  params: HashMap<String, String>,
  data: Option<String>,
}

#[derive(serde::Serialize, serde::Deserialize, Debug, Default)]
#[serde(rename_all = "camelCase")]
struct HoppResponse {
  success: bool,
  is_binary: Option<bool>,
  status: Option<u16>,
  data: Option<String>,
  status_text: Option<String>,
  headers: Option<HashMap<String, String>>,
}


async fn routes(req: hyper::Request<hyper::Body>) -> Result<hyper::Response<hyper::Body>> {
  match handle_req(req).await {
    Err(e) => {
      log::debug!("error: {:?}", e);
      // handle unexpected error
      let mut hopp_resp = HoppResponse::default();
      hopp_resp.success = false;
      hopp_resp.data = Some(format!("error: {:?}", e));
      let resp = hyper::Response::builder();
      let body = serde_json::to_string(&hopp_resp)?;
      return Ok(resp.body(hyper::Body::from(body))?);
    }
    Ok(body) => {
      return Ok(body);
    }
  }
}

async fn request_with_err(hopp_req: HoppRequest) -> HoppResponse {
  match request(hopp_req).await {
    Ok(r) => r,
    Err(e) => {
      let mut hopp_resp = HoppResponse::default();

      hopp_resp.success = false;
      hopp_resp.data = Some(e.to_string());
      hopp_resp
    }
  }
}

async fn request(hopp_req: HoppRequest) -> Result<HoppResponse> {
  log::debug!("request params: {:?}", hopp_req);
  let mut url = Url::parse(hopp_req.url.as_str()).unwrap();
  let req_method = Method::from_bytes(&hopp_req.method.as_bytes())?;

  // "params" into query string
  for (key, value) in hopp_req.params.iter() {
    let part = format!("{}={}", key.as_str(), value.as_str());
    url.set_query(Some(part.as_str()));
  }

  let mut req = hyper::Request::builder()
    .method(req_method)
    .uri(url.to_string());

  // headers
  {
    let h = req.headers_mut().unwrap();
    for (key, val) in hopp_req.headers.iter() {
      let key = HeaderName::from_bytes(key.as_bytes())?;
      h.insert(key, val.parse().unwrap());
    }

    if h.get("content-length").is_none() && hopp_req.data.is_some() {
      let len = hopp_req.data.map(|d| d.len()).unwrap();
      h.insert("content-length", len.to_string().parse().unwrap());
    }
  }

  let req = req.body(hyper::Body::from(hopp_req.body.unwrap_or("".to_string())))?;

  let mut resp = match url.scheme() {
    "https" => {
      let connector = hyper_tls::HttpsConnector::new();
      let cli = hyper::Client::builder().build::<_, hyper::Body>(connector);
      cli.request(req).await?
    }
    _schema => {
      let cli = hyper::Client::new();
      cli.request(req).await?
    }
  };

  let mut hopp_resp = HoppResponse::default();
  hopp_resp.success = true;
  hopp_resp.status = Some(resp.status().as_u16());
  hopp_resp.status_text = Some(resp.status().as_str().to_string());

  {
    let mut headers = HashMap::new();
    let h = resp.headers();

    for (key, value) in h {
      headers.insert(key.to_string(), value.to_str()?.to_string());
    }
    hopp_resp.headers = Some(headers);
  }

  if hopp_req.wants_binary.is_some() && hopp_req.wants_binary.unwrap() {
    hopp_resp.is_binary = Some(true);
    let body = resp.body_mut();
    let body = hyper::body::aggregate(body).await?;
    let c = body.chunk();
    hopp_resp.data = Some(base64::encode(c));
  } else {
    hopp_resp.is_binary = Some(false);
    let body = resp.body_mut();
    let body = hyper::body::aggregate(body).await?;
    let c = body.chunk();
    hopp_resp.data = Some(String::from_utf8(c.to_vec())?);
  }

  Ok(hopp_resp)
}

async fn handle_req(mut req: hyper::Request<hyper::Body>) -> Result<hyper::Response<hyper::Body>> {
  let method = req.method().clone();

  log::debug!("request, method: {}", method);

  let mut resp = hyper::Response::builder();

  resp.headers_mut().map(|h| {
    h.insert("Access-Control-Allow-Headers", "*".parse().unwrap());
    h.insert("Access-Control-Allow-Origin", "*".parse().unwrap());
  });

  // allow OPTIONS requests
  if method == Method::OPTIONS {
    return Ok(resp.status(200).body(hyper::Body::empty())?);
  }

  // For anything other than an POST request, we'll return an empty JSON object.
  if method != Method::POST {
    resp.headers_mut().map(|h| {
      h.insert("Content-Type", "application/json".parse().unwrap());
    });
    let body = r#"{"success":true,"data":""}"#;
    return Ok(resp.body(hyper::Body::from(body))?);
  }

  let hopp_req: HoppRequest = {
    let body = req.body_mut();
    let buf = hyper::body::aggregate(body).await?;

    serde_json::from_slice(buf.chunk())?
  };

  let hopp_resp = request_with_err(hopp_req).await;

  let data = serde_json::to_string(&hopp_resp)?;

  log::debug!("response, hopp_resp: {:?}", hopp_resp);

  let resp = resp.body(hyper::Body::from(data))?;

  Ok(resp)
}

pub fn listen() -> (SocketAddr, impl futures::Future<Output = ()>) {
  let port = match env::var("HOPP_PORT") {
    Ok(env_port) => env_port.parse().unwrap(),
    Err(_) => 0,
  };

  let addr = SocketAddr::from(([127, 0, 0, 1], port));

  let make_service = hyper::service::make_service_fn(|conn| async {
    Ok::<_, Infallible>(hyper::service::service_fn(routes))
  });

  let server = hyper::Server::bind(&addr).serve(make_service);

  let addr = server.local_addr();

  let start = async {
    let _result = server.await;
  };

  (addr, start)
}

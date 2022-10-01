use futures;
use hyper::{self, http::{Method}, body::Buf};
use std::{convert::Infallible, net::SocketAddr};
use std::collections::HashMap;
use serde_json;
use serde;
use std::string::String;
use std::env;
use std::default::Default;
use anyhow::{Result};

#[derive(serde::Serialize, serde::Deserialize, Debug)]
struct HoppAuth {
  username: String,
  password: String,
}

#[derive(serde::Serialize, serde::Deserialize, Debug)]
#[serde(rename_all = "camelCase")]
struct HoppRequest {
  body: String,
  url: String,
  method: String,
  access_token: String,
  auth: HoppAuth,
  headers: HashMap<String, String>,
  data: String,
  params: HashMap<String, String>,
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

async fn handle_req(
  mut req: hyper::Request<hyper::Body>,
) -> Result<hyper::Response<hyper::Body>> {
  let method = req.method().clone();

  let mut resp = hyper::Response::builder();

  resp.headers_mut().map(|h| {
    h.insert("Access-Control-Allow-Headers", "*".parse().unwrap());
    h.insert("Access-Control-Allow-Origin", "*".parse().unwrap());
  });

  // allow OPTIONS requests
  if method == Method::OPTIONS {
    return Ok(resp.status(200).body(hyper::Body::empty())?)
  }

  // For anything other than an POST request, we'll return an empty JSON object.
  if method != Method::POST {
    resp.headers_mut().map(|h| {
      h.insert("Content-Type", "application/json".parse().unwrap());
    });
    let body = r#"{success:true,data:""}"#;
    return Ok(resp.body(hyper::Body::from(body))?);
  }

  let hopp_req: HoppRequest = {
    let body = req.body_mut();
    let buf = hyper::body::aggregate(body).await?;

    serde_json::from_slice(buf.chunk())?
  };


  let resp = resp.body(hyper::Body::empty())?;

  Ok(resp)
}

pub fn listen() -> (SocketAddr, impl futures::Future<Output = ()>) {
  let port = match env::var("HOPP_PORT") {
    Ok(env_port) => {
      env_port.parse().unwrap()
    }
    Err(_) => {
      0
    }
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

// impl ProxyServer<T: hyper::service::Service> {
//   // pub fn new() -> Self {
//   //   ProxyServer {}
//   // }

//   pub async fn start() -> hyper::Result<()> {
//     let addr = SocketAddr::from(([127, 0, 0, 1], 0));

//     let make_service = hyper::service::make_service_fn(|conn| async {
//       Ok::<_, Infallible>(hyper::service::service_fn(routes))
//     });

//     let server = hyper::Server::bind(&addr).serve(make_service);

//     let addr = server.local_addr();

//     server.await?;

//     // futures::select! {
//     //   err = server => {
//     //     println!("hello");
//     //   }
//     // };

//     Ok(())
//   }
// }

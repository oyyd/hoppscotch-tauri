use std::{string::String, net::SocketAddr};
use serde;

#[derive(serde::Deserialize, serde::Serialize, Default, Clone)]
#[serde(rename_all = "camelCase")]
struct HoppConfig {
  backend_proxy: String,
}

pub fn tauri(proxy_addr: &SocketAddr) {
  let addr = proxy_addr.clone();
  let context = tauri::generate_context!();

  tauri::Builder::default()
    .on_page_load(move |window, _| {
      let config = HoppConfig {
        backend_proxy: format!("http://{}", addr.to_string()),
      };
      let content = serde_json::to_string(&config).unwrap();
      let script = format!("window.__hopp_init({});", content.as_str());
      // TODO not work
      // window.emit("hopp_set_config", config).unwrap();
      window.eval(script.as_str()).unwrap();
    })
    .run(context)
    .expect("error while running tauri application");
}

use std::{string::String, net::SocketAddr};
use serde;

#[derive(serde::Deserialize, serde::Serialize, Default, Clone)]
#[serde(rename_all = "camelCase")]
struct HoppConfig {
  backend_proxy: String,
}

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
// #[tauri::command]
// fn get_hopp_config() -> HoppConfig {
//   HoppConfig::default()
// }

pub fn tauri(proxy_addr: &SocketAddr) {
  let addr = proxy_addr.clone();
  let context = tauri::generate_context!();

  tauri::Builder::default()
    .on_page_load(move |window, _| {
      let config = HoppConfig {
        backend_proxy: format!("http://{}", addr.to_string()),
      };
      let content = serde_json::to_string(&config).unwrap();
      let script = format!("__hopp_init({});", content.as_str());
      // TODO not work
      // window.emit("hopp_set_config", config).unwrap();
      window.eval(script.as_str()).unwrap();
    })
    // .invoke_handler(tauri::generate_handler![get_hopp_config])
    .run(context)
    .expect("error while running tauri application");
}

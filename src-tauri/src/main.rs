#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use tokio::runtime::Runtime;

mod proxy;

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

fn hopp_tauri() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

fn main() {
    let rt = Runtime::new().expect("failed to initialize tokio rt");

    rt.spawn(async {
        let (addr, start) = proxy::listen();

        println!("addr {:}", addr);

        start.await;
    });

    hopp_tauri()
}

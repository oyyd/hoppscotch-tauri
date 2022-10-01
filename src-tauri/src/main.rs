#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use tokio::runtime::Runtime;
use env_logger;
use log;

mod proxy;
mod hopp;

fn main() {
    env_logger::init();

    let rt = Runtime::new().expect("failed to initialize tokio rt");

    let (addr, start) = rt.block_on(async {
        proxy::listen()
    });

    rt.spawn(async move {
        log::debug!("addr {:}", addr);
        start.await;
    });

    hopp::tauri(&addr);
}

# hoppscotch-tauri

<!-- ![github_ci_status](https://github.com/oyyd/hoppscotch-tauri/workflows/CI/badge.svg) -->

hoppscotch-tauri is a desktop requests sender that bundles [hoppscotch](https://github.com/hoppscotch/hoppscotch) and a Rust proxy server with [tauri](https://tauri.app).

<img src="./imgs/screenshot.png" style="width: 600px; border-radius: 10px;"></img>

## Download

[https://github.com/oyyd/hoppscotch-tauri/releases](https://github.com/oyyd/hoppscotch-tauri/releases)

|Platform|Notarized?|Download|
|---|---|---|
|Mac|✅|[Link](https://github.com/oyyd/hoppscotch-tauri/releases/download/release-v0.1.1/hoppscotch-tauri_0.1.1_x64_darwin.dmg)|
|Windows|❌|[Link](https://github.com/oyyd/hoppscotch-tauri/releases/download/release-v0.1.1/hoppscotch-tauri_0.1.1_x64_win32.msi)|
|Linux||[Link](https://github.com/oyyd/hoppscotch-tauri/releases/download/release-v0.1.1/hoppscotch-tauri_0.1.1_amd64_linux.deb)|

## Development

See the [Prerequisites](https://tauri.app/v1/guides/getting-started/prerequisites) and start the app from source at local with:

```
cargo install tauri-cli # if you don't have
cargo tauri dev
```

Put built static files of hoppscotch in the `src` folder.

Pushing `release` branch will trigger workflows to build executables. Change the `version` field in `tauri.conf.json` to bump a version.

## Hoppscotch version

2.2.1

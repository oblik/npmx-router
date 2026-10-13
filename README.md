# npmx router

A tiny browser extension that instantly redirects you from npmjs.com URLs to [npmx.dev](https://npmx.dev) instead.

👉 **[Download from Chrome Web Store](https://chromewebstore.google.com/detail/npmx-router/cdicloegkpnpkofnfjdademiibocmnkd)**

## Why

Search engines almost always link to npmjs.com for a package. If you prefer browsing packages on npmx.dev, that means an extra step every time. This extension does the redirect for you, wherever the link came from: Google, GitHub, Slack, or a typed URL.

## What gets redirected

| npmjs.com | npmx.dev |
| --- | --- |
| `npmjs.com/package/vite` | `npmx.dev/package/vite` |
| `npmjs.com/package/@vitejs/plugin-vue` | `npmx.dev/package/@vitejs/plugin-vue` |
| `npmjs.com/package/vite/v/5.0.0` | `npmx.dev/package/vite/v/5.0.0` |
| `npmjs.com/search?q=vue` | `npmx.dev/search?q=vue` |

- npmjs-specific query parameters (`?activeTab=…`, `&page=…`, `&ranking=…`) are dropped, since they don't map onto npmx.
- Everything else on npmjs.com (login, settings, access tokens, org pages) is left alone.

## Turning it off

Click the extension's icon in the toolbar to toggle the redirect. While it's off, the icon shows an **OFF** badge. The setting persists across browser restarts.

## How it works

The redirect is a static [`declarativeNetRequest`](https://developer.chrome.com/docs/extensions/reference/api/declarativeNetRequest) ruleset ([`public/rules.json`](public/rules.json)), so the browser rewrites the request before it is sent. No script runs on npmjs.com, and the page never starts loading.

The background script ([`entrypoints/background.ts`](entrypoints/background.ts)) only handles the toolbar click: it enables or disables the ruleset and stores the choice.

Permissions requested:

- `declarativeNetRequest`: to apply the redirect rules
- `storage`: to remember whether the redirect is on
- Host access to `npmjs.com` only

## Install from source

Requires [Bun](https://bun.sh).

```sh
bun install
bun run build
```

Then, in Chrome (or another Chromium-based browser):

1. Open `chrome://extensions`
2. Enable **Developer mode**
3. Click **Load unpacked** and select `.output/chrome-mv3`

## Development

```sh
bun run dev
```

This opens a browser with the extension loaded and reloads it on changes. Built with [WXT](https://wxt.dev).

## Project structure

```
entrypoints/background.ts   toolbar click → toggle redirect
public/rules.json           redirect rules
public/icon/                extension icons (npmx.dev favicon)
wxt.config.ts               manifest config
```

# Chrome Web Store listing

## Summary (from manifest, max 132 chars)

Redirects npmjs.com package pages to npmx.dev.

## Description

Open npm packages on npmx.dev instead of npmjs.com.

Search engines, READMEs and chat messages almost always link to npmjs.com. If you prefer browsing packages on npmx.dev, npmx router takes you there automatically, wherever the link came from.

What gets redirected:
• Package pages: npmjs.com/package/vite → npmx.dev/package/vite
• Scoped packages: npmjs.com/package/@vitejs/plugin-vue → npmx.dev/package/@vitejs/plugin-vue
• Specific versions: npmjs.com/package/vite/v/5.0.0 → npmx.dev/package/vite/v/5.0.0
• Search: npmjs.com/search?q=vue → npmx.dev/search?q=vue

Everything else on npmjs.com (login, settings, access tokens, org pages) is left alone, so you can still manage your account there.

Turning it off:
Click the toolbar icon to switch the redirect on or off. While it's off, the icon shows an OFF badge. Your choice is remembered across browser restarts.

Fast and private:
The redirect uses Chrome's built-in declarativeNetRequest rules, so the browser rewrites the URL before the request is sent. No script runs on any page, nothing is collected, and the extension only has access to npmjs.com.

Open source: https://github.com/oblik/npmx-router

npmx router is an independent project and is not affiliated with npm, Inc. or GitHub.

## Category

Developer Tools

## Single purpose (privacy tab)

Redirects npmjs.com package and search pages to the equivalent pages on npmx.dev.

## Permission justifications (privacy tab)

- declarativeNetRequest: Applies the static redirect rules that rewrite npmjs.com package and search URLs to npmx.dev.
- storage: Remembers whether the user has turned the redirect on or off.
- Host permission (npmjs.com): Required so the redirect rules can act on requests to npmjs.com. No other sites are accessed.

## Data usage (privacy tab)

Does not collect or transmit any user data.

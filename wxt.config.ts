import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
  manifest: {
    name: 'npmx router',
    description: 'Redirects npmjs.com package pages to npmx.dev.',
    permissions: ['declarativeNetRequest', 'storage'],
    host_permissions: ['*://npmjs.com/*', '*://www.npmjs.com/*'],
    // No popup, so clicking the toolbar icon fires `action.onClicked`.
    action: { default_title: 'npmx router: on' },
    declarative_net_request: {
      rule_resources: [{ id: 'npmx', enabled: true, path: 'rules.json' }],
    },
  },
});

const RULESET_ID = 'npmx';

// Enabled state of static rulesets doesn't survive extension updates,
// so keep our own copy and reapply it on every startup.
const enabledItem = storage.defineItem<boolean>('local:enabled', {
  fallback: true,
});

async function apply(enabled: boolean) {
  await browser.declarativeNetRequest.updateEnabledRulesets(
    enabled
      ? { enableRulesetIds: [RULESET_ID] }
      : { disableRulesetIds: [RULESET_ID] },
  );
  await browser.action.setBadgeText({ text: enabled ? '' : 'OFF' });
  await browser.action.setTitle({
    title: `npmx router: ${enabled ? 'on' : 'off'}`,
  });
}

export default defineBackground(() => {
  enabledItem.getValue().then(apply);

  browser.action.onClicked.addListener(async () => {
    const enabled = !(await enabledItem.getValue());
    await enabledItem.setValue(enabled);
    await apply(enabled);
  });
});

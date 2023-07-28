import { module, test } from 'qunit';
import { visit, click, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-router-service-test/tests/helpers';

module('Acceptance | redirect', function (hooks) {
  setupApplicationTest(hooks);

  test('Can redirect to a route which has queryParams defined', async function (assert) {
    try {
      await visit('/redirect-to-home');
    } catch {
      // We expect this promise one to be rejected - it's a redirect
    }

    assert.strictEqual(currentURL(), '/home');

    assert.dom('#messagebox').hasText('Transition completed');
  });

  test('Can cleanly transition to a route which has queryParams defined', async function (assert) {
    await visit('/other-page');
    await click('button');
    assert.strictEqual(currentURL(), '/home');
    assert.dom('#messagebox').hasText('Transition completed');
  });
});

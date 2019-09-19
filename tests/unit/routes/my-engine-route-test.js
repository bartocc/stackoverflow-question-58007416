import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import engineResolverFor from 'ember-engines/test-support/engine-resolver-for';

const modulePrefix = 'user-backoffice';
const resolver = engineResolverFor(modulePrefix);

module('[user-backoffice] Unit | Route | my-engine-route', function(hooks) {
  setupTest(hooks, {resolver});

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:my-engine-route');
    assert.ok(route);
  });
});

import { moduleFor, test } from 'ember-qunit';

moduleFor('route:u-k-t-i-o-app-dolzhnost-l', 'Unit | Route | u-k-t-i-o-app-dolzhnost-l', {
  // Specify the other units that are required for this test.
  needs: [
    'service:cols-config-menu',
    'service:form-load-time-tracker',
    'service:objectlistview-events',
    'service:app-state',
    'service:adv-limit',
  ],
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
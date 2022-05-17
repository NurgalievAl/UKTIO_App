import { moduleForModel, test } from 'ember-qunit';

moduleForModel('u-k-t-i-o-app-sotrudnik', 'Unit | Model | u-k-t-i-o-app-sotrudnik', {
  // Specify the other units that are required for this test.
  needs: [
    'model:u-k-t-i-o-app-dolzhnost',
    'model:u-k-t-i-o-app-oborudovanie',
    'model:u-k-t-i-o-app-organizaciya',
    'model:u-k-t-i-o-app-sotrudnik',
    'model:u-k-t-i-o-app-tip-oborudovaniya',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});

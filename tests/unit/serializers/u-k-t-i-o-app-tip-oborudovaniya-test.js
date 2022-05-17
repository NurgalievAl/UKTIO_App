import { moduleForModel, test } from 'ember-qunit';

moduleForModel('u-k-t-i-o-app-tip-oborudovaniya', 'Unit | Serializer | u-k-t-i-o-app-tip-oborudovaniya', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:u-k-t-i-o-app-tip-oborudovaniya',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:u-k-t-i-o-app-t-status',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});

'use strict';

define('ember-app/tests/acceptance/u-k-t-i-o-app-dolzhnost-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('Acceptance | u k t i o app dolzhnost l');

  (0, _qunit.test)('testing /u-k-t-i-o-app-dolzhnost-l', function (assert) {
    var _this = this;

    visit('/u-k-t-i-o-app-dolzhnost-l');

    andThen(function () {
      checkOlvConfig('[data-test-olv]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-olv]', null, assert, newFormRoute);
    });
  });
});
define('ember-app/tests/acceptance/u-k-t-i-o-app-oborudovanie-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('Acceptance | u k t i o app oborudovanie l');

  (0, _qunit.test)('testing /u-k-t-i-o-app-oborudovanie-l', function (assert) {
    var _this = this;

    visit('/u-k-t-i-o-app-oborudovanie-l');

    andThen(function () {
      checkOlvConfig('[data-test-olv]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-olv]', null, assert, newFormRoute);
    });
  });
});
define('ember-app/tests/acceptance/u-k-t-i-o-app-organizaciya-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('Acceptance | u k t i o app organizaciya l');

  (0, _qunit.test)('testing /u-k-t-i-o-app-organizaciya-l', function (assert) {
    var _this = this;

    visit('/u-k-t-i-o-app-organizaciya-l');

    andThen(function () {
      checkOlvConfig('[data-test-olv]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-olv]', null, assert, newFormRoute);
    });
  });
});
define('ember-app/tests/acceptance/u-k-t-i-o-app-sotrudnik-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('Acceptance | u k t i o app sotrudnik l');

  (0, _qunit.test)('testing /u-k-t-i-o-app-sotrudnik-l', function (assert) {
    var _this = this;

    visit('/u-k-t-i-o-app-sotrudnik-l');

    andThen(function () {
      checkOlvConfig('[data-test-olv]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-olv]', null, assert, newFormRoute);
    });
  });
});
define('ember-app/tests/acceptance/u-k-t-i-o-app-tip-oborudovaniya-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('Acceptance | u k t i o app tip oborudovaniya l');

  (0, _qunit.test)('testing /u-k-t-i-o-app-tip-oborudovaniya-l', function (assert) {
    var _this = this;

    visit('/u-k-t-i-o-app-tip-oborudovaniya-l');

    andThen(function () {
      checkOlvConfig('[data-test-olv]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-olv]', null, assert, newFormRoute);
    });
  });
});
define('ember-app/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
  });

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/application.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/login.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/login.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/u-k-t-i-o-app-dolzhnost-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/u-k-t-i-o-app-dolzhnost-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/u-k-t-i-o-app-dolzhnost-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/u-k-t-i-o-app-dolzhnost-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/u-k-t-i-o-app-dolzhnost-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/u-k-t-i-o-app-dolzhnost-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/u-k-t-i-o-app-oborudovanie-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/u-k-t-i-o-app-oborudovanie-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/u-k-t-i-o-app-oborudovanie-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/u-k-t-i-o-app-oborudovanie-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/u-k-t-i-o-app-oborudovanie-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/u-k-t-i-o-app-oborudovanie-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/u-k-t-i-o-app-organizaciya-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/u-k-t-i-o-app-organizaciya-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/u-k-t-i-o-app-organizaciya-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/u-k-t-i-o-app-organizaciya-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/u-k-t-i-o-app-organizaciya-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/u-k-t-i-o-app-organizaciya-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/u-k-t-i-o-app-sotrudnik-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/u-k-t-i-o-app-sotrudnik-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/u-k-t-i-o-app-sotrudnik-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/u-k-t-i-o-app-sotrudnik-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/u-k-t-i-o-app-sotrudnik-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/u-k-t-i-o-app-sotrudnik-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/u-k-t-i-o-app-tip-oborudovaniya-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/u-k-t-i-o-app-tip-oborudovaniya-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/u-k-t-i-o-app-tip-oborudovaniya-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/u-k-t-i-o-app-tip-oborudovaniya-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/u-k-t-i-o-app-tip-oborudovaniya-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/u-k-t-i-o-app-tip-oborudovaniya-l.js should pass ESLint\n\n');
  });

  QUnit.test('enums/u-k-t-i-o-app-t-status.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'enums/u-k-t-i-o-app-t-status.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/u-k-t-i-o-app-dolzhnost-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/u-k-t-i-o-app-dolzhnost-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/u-k-t-i-o-app-dolzhnost-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/u-k-t-i-o-app-dolzhnost-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/u-k-t-i-o-app-oborudovanie-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/u-k-t-i-o-app-oborudovanie-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/u-k-t-i-o-app-oborudovanie-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/u-k-t-i-o-app-oborudovanie-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/u-k-t-i-o-app-organizaciya-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/u-k-t-i-o-app-organizaciya-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/u-k-t-i-o-app-organizaciya-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/u-k-t-i-o-app-organizaciya-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/u-k-t-i-o-app-sotrudnik-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/u-k-t-i-o-app-sotrudnik-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/u-k-t-i-o-app-sotrudnik-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/u-k-t-i-o-app-sotrudnik-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/u-k-t-i-o-app-tip-oborudovaniya-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/u-k-t-i-o-app-tip-oborudovaniya-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/u-k-t-i-o-app-tip-oborudovaniya-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/u-k-t-i-o-app-tip-oborudovaniya-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/u-k-t-i-o-app-dolzhnost.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/u-k-t-i-o-app-dolzhnost.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/u-k-t-i-o-app-oborudovanie.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/u-k-t-i-o-app-oborudovanie.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/u-k-t-i-o-app-organizaciya.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/u-k-t-i-o-app-organizaciya.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/u-k-t-i-o-app-sotrudnik.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/u-k-t-i-o-app-sotrudnik.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/u-k-t-i-o-app-tip-oborudovaniya.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/u-k-t-i-o-app-tip-oborudovaniya.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/translations.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/translations.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/u-k-t-i-o-app-dolzhnost-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/u-k-t-i-o-app-dolzhnost-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/u-k-t-i-o-app-dolzhnost-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/u-k-t-i-o-app-dolzhnost-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/u-k-t-i-o-app-oborudovanie-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/u-k-t-i-o-app-oborudovanie-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/u-k-t-i-o-app-oborudovanie-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/u-k-t-i-o-app-oborudovanie-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/u-k-t-i-o-app-organizaciya-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/u-k-t-i-o-app-organizaciya-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/u-k-t-i-o-app-organizaciya-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/u-k-t-i-o-app-organizaciya-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/u-k-t-i-o-app-sotrudnik-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/u-k-t-i-o-app-sotrudnik-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/u-k-t-i-o-app-sotrudnik-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/u-k-t-i-o-app-sotrudnik-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/u-k-t-i-o-app-tip-oborudovaniya-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/u-k-t-i-o-app-tip-oborudovaniya-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/u-k-t-i-o-app-tip-oborudovaniya-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/u-k-t-i-o-app-tip-oborudovaniya-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/u-k-t-i-o-app-dolzhnost.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/u-k-t-i-o-app-dolzhnost.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/u-k-t-i-o-app-oborudovanie.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/u-k-t-i-o-app-oborudovanie.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/u-k-t-i-o-app-organizaciya.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/u-k-t-i-o-app-organizaciya.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/u-k-t-i-o-app-sotrudnik.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/u-k-t-i-o-app-sotrudnik.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/u-k-t-i-o-app-tip-oborudovaniya.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/u-k-t-i-o-app-tip-oborudovaniya.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/translations.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/translations.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/u-k-t-i-o-app-dolzhnost.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/u-k-t-i-o-app-dolzhnost.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/u-k-t-i-o-app-oborudovanie.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/u-k-t-i-o-app-oborudovanie.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/u-k-t-i-o-app-organizaciya.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/u-k-t-i-o-app-organizaciya.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/u-k-t-i-o-app-sotrudnik.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/u-k-t-i-o-app-sotrudnik.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/u-k-t-i-o-app-tip-oborudovaniya.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/u-k-t-i-o-app-tip-oborudovaniya.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/u-k-t-i-o-app-dolzhnost.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/u-k-t-i-o-app-dolzhnost.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/u-k-t-i-o-app-oborudovanie.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/u-k-t-i-o-app-oborudovanie.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/u-k-t-i-o-app-organizaciya.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/u-k-t-i-o-app-organizaciya.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/u-k-t-i-o-app-sotrudnik.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/u-k-t-i-o-app-sotrudnik.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/u-k-t-i-o-app-tip-oborudovaniya.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/u-k-t-i-o-app-tip-oborudovaniya.js should pass ESLint\n\n');
  });

  QUnit.test('models/custom-inflector-rules.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/custom-inflector-rules.js should pass ESLint\n\n');
  });

  QUnit.test('models/u-k-t-i-o-app-dolzhnost.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/u-k-t-i-o-app-dolzhnost.js should pass ESLint\n\n');
  });

  QUnit.test('models/u-k-t-i-o-app-oborudovanie.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/u-k-t-i-o-app-oborudovanie.js should pass ESLint\n\n');
  });

  QUnit.test('models/u-k-t-i-o-app-organizaciya.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/u-k-t-i-o-app-organizaciya.js should pass ESLint\n\n');
  });

  QUnit.test('models/u-k-t-i-o-app-sotrudnik.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/u-k-t-i-o-app-sotrudnik.js should pass ESLint\n\n');
  });

  QUnit.test('models/u-k-t-i-o-app-tip-oborudovaniya.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/u-k-t-i-o-app-tip-oborudovaniya.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass ESLint\n\n');
  });

  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint\n\n');
  });

  QUnit.test('routes/login.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/login.js should pass ESLint\n\n');
  });

  QUnit.test('routes/u-k-t-i-o-app-dolzhnost-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/u-k-t-i-o-app-dolzhnost-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/u-k-t-i-o-app-dolzhnost-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/u-k-t-i-o-app-dolzhnost-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/u-k-t-i-o-app-dolzhnost-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/u-k-t-i-o-app-dolzhnost-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/u-k-t-i-o-app-oborudovanie-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/u-k-t-i-o-app-oborudovanie-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/u-k-t-i-o-app-oborudovanie-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/u-k-t-i-o-app-oborudovanie-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/u-k-t-i-o-app-oborudovanie-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/u-k-t-i-o-app-oborudovanie-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/u-k-t-i-o-app-organizaciya-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/u-k-t-i-o-app-organizaciya-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/u-k-t-i-o-app-organizaciya-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/u-k-t-i-o-app-organizaciya-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/u-k-t-i-o-app-organizaciya-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/u-k-t-i-o-app-organizaciya-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/u-k-t-i-o-app-sotrudnik-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/u-k-t-i-o-app-sotrudnik-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/u-k-t-i-o-app-sotrudnik-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/u-k-t-i-o-app-sotrudnik-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/u-k-t-i-o-app-sotrudnik-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/u-k-t-i-o-app-sotrudnik-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/u-k-t-i-o-app-tip-oborudovaniya-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/u-k-t-i-o-app-tip-oborudovaniya-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/u-k-t-i-o-app-tip-oborudovaniya-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/u-k-t-i-o-app-tip-oborudovaniya-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/u-k-t-i-o-app-tip-oborudovaniya-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/u-k-t-i-o-app-tip-oborudovaniya-l.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/application.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/u-k-t-i-o-app-dolzhnost.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/u-k-t-i-o-app-dolzhnost.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/u-k-t-i-o-app-oborudovanie.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/u-k-t-i-o-app-oborudovanie.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/u-k-t-i-o-app-organizaciya.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/u-k-t-i-o-app-organizaciya.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/u-k-t-i-o-app-sotrudnik.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/u-k-t-i-o-app-sotrudnik.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/u-k-t-i-o-app-tip-oborudovaniya.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/u-k-t-i-o-app-tip-oborudovaniya.js should pass ESLint\n\n');
  });

  QUnit.test('services/store.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/store.js should pass ESLint\n\n');
  });

  QUnit.test('transforms/u-k-t-i-o-app-t-status.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'transforms/u-k-t-i-o-app-t-status.js should pass ESLint\n\n');
  });
});
define('ember-app/tests/helpers/destroy-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  function destroyApp(application) {
    Ember.run(application, 'destroy');
  }
});
define('ember-app/tests/helpers/ember-i18n/test-helpers', ['ember-i18n/test-support/-private/t', 'ember-i18n/test-support/-private/assert-translation'], function (_t2, _assertTranslation2) {
  'use strict';

  // example usage: find(`.header:contains(${t('welcome_message')})`)
  Ember.Test.registerHelper('t', function (app, key, interpolations) {
    return (0, _t2.default)(app.__container__, key, interpolations);
  });

  // example usage: expectTranslation('.header', 'welcome_message');
  Ember.Test.registerHelper('expectTranslation', function (app, element, key, interpolations) {
    var text = (0, _t2.default)(app.__container__, key, interpolations);

    (0, _assertTranslation2.default)(element, key, text);
  });
});
define('ember-app/tests/helpers/ember-prop-types', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.createComponent = createComponent;

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  var VERSION = Ember.VERSION;


  /**
   * Determine if we are on a version of Ember that includes Glimmer 2
   * @returns {Boolean} whether or not we are on Glimmer 2
   */
  function isGlimmer2() {
    var _VERSION$split = VERSION.split('.'),
        _VERSION$split2 = _slicedToArray(_VERSION$split, 2),
        major = _VERSION$split2[0],
        minor = _VERSION$split2[1];

    return parseInt(major) > 1 && parseInt(minor) > 9;
  }

  /**
   * Programitcally instantiate instance of component class
   * @param {Ember.Component} component - component class to instantiate
   * @returns {Ember.Component} instance of component class
   */
  function createComponent(component) {
    if (isGlimmer2()) {
      return component.create({ renderer: {} });
    }

    return component.create();
  }
});
define('ember-app/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember-app/tests/helpers/start-app', 'ember-app/tests/helpers/destroy-app'], function (exports, _qunit, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Ember.RSVP.resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };
});
define('ember-app/tests/helpers/start-app', ['exports', 'ember-app/app', 'ember-app/config/environment', 'ember-flexberry/test-support'], function (exports, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  function startApp(attrs) {
    var attributes = Ember.merge({}, _environment.default.APP);
    attributes.autoboot = true;
    attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

    return Ember.run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('ember-app/tests/test-helper', ['ember-app/app', 'ember-app/config/environment', '@ember/test-helpers', 'ember-qunit'], function (_app, _environment, _testHelpers, _emberQunit) {
  'use strict';

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));

  (0, _emberQunit.start)();
});
define('ember-app/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('acceptance/u-k-t-i-o-app-dolzhnost-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/u-k-t-i-o-app-dolzhnost-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/u-k-t-i-o-app-oborudovanie-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/u-k-t-i-o-app-oborudovanie-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/u-k-t-i-o-app-organizaciya-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/u-k-t-i-o-app-organizaciya-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/u-k-t-i-o-app-sotrudnik-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/u-k-t-i-o-app-sotrudnik-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/u-k-t-i-o-app-tip-oborudovaniya-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/u-k-t-i-o-app-tip-oborudovaniya-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/u-k-t-i-o-app-dolzhnost-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/u-k-t-i-o-app-dolzhnost-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/u-k-t-i-o-app-dolzhnost-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/u-k-t-i-o-app-dolzhnost-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/u-k-t-i-o-app-oborudovanie-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/u-k-t-i-o-app-oborudovanie-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/u-k-t-i-o-app-oborudovanie-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/u-k-t-i-o-app-oborudovanie-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/u-k-t-i-o-app-organizaciya-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/u-k-t-i-o-app-organizaciya-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/u-k-t-i-o-app-organizaciya-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/u-k-t-i-o-app-organizaciya-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/u-k-t-i-o-app-sotrudnik-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/u-k-t-i-o-app-sotrudnik-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/u-k-t-i-o-app-sotrudnik-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/u-k-t-i-o-app-sotrudnik-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/u-k-t-i-o-app-tip-oborudovaniya-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/u-k-t-i-o-app-tip-oborudovaniya-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/u-k-t-i-o-app-tip-oborudovaniya-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/u-k-t-i-o-app-tip-oborudovaniya-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/u-k-t-i-o-app-dolzhnost-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/u-k-t-i-o-app-dolzhnost-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/u-k-t-i-o-app-oborudovanie-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/u-k-t-i-o-app-oborudovanie-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/u-k-t-i-o-app-organizaciya-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/u-k-t-i-o-app-organizaciya-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/u-k-t-i-o-app-sotrudnik-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/u-k-t-i-o-app-sotrudnik-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/u-k-t-i-o-app-tip-oborudovaniya-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/u-k-t-i-o-app-tip-oborudovaniya-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/login-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/login-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/u-k-t-i-o-app-dolzhnost-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/u-k-t-i-o-app-dolzhnost-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/u-k-t-i-o-app-dolzhnost-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/u-k-t-i-o-app-dolzhnost-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/u-k-t-i-o-app-oborudovanie-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/u-k-t-i-o-app-oborudovanie-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/u-k-t-i-o-app-oborudovanie-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/u-k-t-i-o-app-oborudovanie-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/u-k-t-i-o-app-organizaciya-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/u-k-t-i-o-app-organizaciya-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/u-k-t-i-o-app-organizaciya-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/u-k-t-i-o-app-organizaciya-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/u-k-t-i-o-app-sotrudnik-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/u-k-t-i-o-app-sotrudnik-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/u-k-t-i-o-app-sotrudnik-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/u-k-t-i-o-app-sotrudnik-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/u-k-t-i-o-app-tip-oborudovaniya-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/u-k-t-i-o-app-tip-oborudovaniya-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/u-k-t-i-o-app-tip-oborudovaniya-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/u-k-t-i-o-app-tip-oborudovaniya-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/u-k-t-i-o-app-dolzhnost-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/u-k-t-i-o-app-dolzhnost-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/u-k-t-i-o-app-oborudovanie-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/u-k-t-i-o-app-oborudovanie-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/u-k-t-i-o-app-organizaciya-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/u-k-t-i-o-app-organizaciya-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/u-k-t-i-o-app-sotrudnik-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/u-k-t-i-o-app-sotrudnik-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/u-k-t-i-o-app-tip-oborudovaniya-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/u-k-t-i-o-app-tip-oborudovaniya-test.js should pass ESLint\n\n');
  });
});
define('ember-app/tests/unit/controllers/u-k-t-i-o-app-dolzhnost-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:u-k-t-i-o-app-dolzhnost-e', 'Unit | Controller | u-k-t-i-o-app-dolzhnost-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/u-k-t-i-o-app-dolzhnost-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:u-k-t-i-o-app-dolzhnost-l', 'Unit | Controller | u-k-t-i-o-app-dolzhnost-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/u-k-t-i-o-app-oborudovanie-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:u-k-t-i-o-app-oborudovanie-e', 'Unit | Controller | u-k-t-i-o-app-oborudovanie-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/u-k-t-i-o-app-oborudovanie-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:u-k-t-i-o-app-oborudovanie-l', 'Unit | Controller | u-k-t-i-o-app-oborudovanie-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/u-k-t-i-o-app-organizaciya-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:u-k-t-i-o-app-organizaciya-e', 'Unit | Controller | u-k-t-i-o-app-organizaciya-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/u-k-t-i-o-app-organizaciya-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:u-k-t-i-o-app-organizaciya-l', 'Unit | Controller | u-k-t-i-o-app-organizaciya-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/u-k-t-i-o-app-sotrudnik-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:u-k-t-i-o-app-sotrudnik-e', 'Unit | Controller | u-k-t-i-o-app-sotrudnik-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/u-k-t-i-o-app-sotrudnik-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:u-k-t-i-o-app-sotrudnik-l', 'Unit | Controller | u-k-t-i-o-app-sotrudnik-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/u-k-t-i-o-app-tip-oborudovaniya-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:u-k-t-i-o-app-tip-oborudovaniya-e', 'Unit | Controller | u-k-t-i-o-app-tip-oborudovaniya-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/u-k-t-i-o-app-tip-oborudovaniya-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:u-k-t-i-o-app-tip-oborudovaniya-l', 'Unit | Controller | u-k-t-i-o-app-tip-oborudovaniya-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/models/u-k-t-i-o-app-dolzhnost-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('u-k-t-i-o-app-dolzhnost', 'Unit | Model | u-k-t-i-o-app-dolzhnost', {
    // Specify the other units that are required for this test.
    needs: ['model:u-k-t-i-o-app-dolzhnost', 'model:u-k-t-i-o-app-oborudovanie', 'model:u-k-t-i-o-app-organizaciya', 'model:u-k-t-i-o-app-sotrudnik', 'model:u-k-t-i-o-app-tip-oborudovaniya', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/u-k-t-i-o-app-oborudovanie-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('u-k-t-i-o-app-oborudovanie', 'Unit | Model | u-k-t-i-o-app-oborudovanie', {
    // Specify the other units that are required for this test.
    needs: ['model:u-k-t-i-o-app-dolzhnost', 'model:u-k-t-i-o-app-oborudovanie', 'model:u-k-t-i-o-app-organizaciya', 'model:u-k-t-i-o-app-sotrudnik', 'model:u-k-t-i-o-app-tip-oborudovaniya', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/u-k-t-i-o-app-organizaciya-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('u-k-t-i-o-app-organizaciya', 'Unit | Model | u-k-t-i-o-app-organizaciya', {
    // Specify the other units that are required for this test.
    needs: ['model:u-k-t-i-o-app-dolzhnost', 'model:u-k-t-i-o-app-oborudovanie', 'model:u-k-t-i-o-app-organizaciya', 'model:u-k-t-i-o-app-sotrudnik', 'model:u-k-t-i-o-app-tip-oborudovaniya', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/u-k-t-i-o-app-sotrudnik-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('u-k-t-i-o-app-sotrudnik', 'Unit | Model | u-k-t-i-o-app-sotrudnik', {
    // Specify the other units that are required for this test.
    needs: ['model:u-k-t-i-o-app-dolzhnost', 'model:u-k-t-i-o-app-oborudovanie', 'model:u-k-t-i-o-app-organizaciya', 'model:u-k-t-i-o-app-sotrudnik', 'model:u-k-t-i-o-app-tip-oborudovaniya', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/u-k-t-i-o-app-tip-oborudovaniya-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('u-k-t-i-o-app-tip-oborudovaniya', 'Unit | Model | u-k-t-i-o-app-tip-oborudovaniya', {
    // Specify the other units that are required for this test.
    needs: ['model:u-k-t-i-o-app-dolzhnost', 'model:u-k-t-i-o-app-oborudovanie', 'model:u-k-t-i-o-app-organizaciya', 'model:u-k-t-i-o-app-sotrudnik', 'model:u-k-t-i-o-app-tip-oborudovaniya', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/routes/login-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | login', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:login');
      assert.ok(route);
    });
  });
});
define('ember-app/tests/unit/routes/u-k-t-i-o-app-dolzhnost-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:u-k-t-i-o-app-dolzhnost-e', 'Unit | Route | u-k-t-i-o-app-dolzhnost-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/u-k-t-i-o-app-dolzhnost-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:u-k-t-i-o-app-dolzhnost-l', 'Unit | Route | u-k-t-i-o-app-dolzhnost-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/u-k-t-i-o-app-oborudovanie-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:u-k-t-i-o-app-oborudovanie-e', 'Unit | Route | u-k-t-i-o-app-oborudovanie-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/u-k-t-i-o-app-oborudovanie-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:u-k-t-i-o-app-oborudovanie-l', 'Unit | Route | u-k-t-i-o-app-oborudovanie-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/u-k-t-i-o-app-organizaciya-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:u-k-t-i-o-app-organizaciya-e', 'Unit | Route | u-k-t-i-o-app-organizaciya-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/u-k-t-i-o-app-organizaciya-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:u-k-t-i-o-app-organizaciya-l', 'Unit | Route | u-k-t-i-o-app-organizaciya-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/u-k-t-i-o-app-sotrudnik-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:u-k-t-i-o-app-sotrudnik-e', 'Unit | Route | u-k-t-i-o-app-sotrudnik-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/u-k-t-i-o-app-sotrudnik-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:u-k-t-i-o-app-sotrudnik-l', 'Unit | Route | u-k-t-i-o-app-sotrudnik-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/u-k-t-i-o-app-tip-oborudovaniya-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:u-k-t-i-o-app-tip-oborudovaniya-e', 'Unit | Route | u-k-t-i-o-app-tip-oborudovaniya-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/u-k-t-i-o-app-tip-oborudovaniya-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:u-k-t-i-o-app-tip-oborudovaniya-l', 'Unit | Route | u-k-t-i-o-app-tip-oborudovaniya-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/serializers/u-k-t-i-o-app-dolzhnost-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('u-k-t-i-o-app-dolzhnost', 'Unit | Serializer | u-k-t-i-o-app-dolzhnost', {
    // Specify the other units that are required for this test.
    needs: ['serializer:u-k-t-i-o-app-dolzhnost', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:u-k-t-i-o-app-t-status', 'model:u-k-t-i-o-app-dolzhnost', 'model:u-k-t-i-o-app-oborudovanie', 'model:u-k-t-i-o-app-organizaciya', 'model:u-k-t-i-o-app-sotrudnik', 'model:u-k-t-i-o-app-tip-oborudovaniya', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/u-k-t-i-o-app-oborudovanie-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('u-k-t-i-o-app-oborudovanie', 'Unit | Serializer | u-k-t-i-o-app-oborudovanie', {
    // Specify the other units that are required for this test.
    needs: ['serializer:u-k-t-i-o-app-oborudovanie', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:u-k-t-i-o-app-t-status', 'model:u-k-t-i-o-app-dolzhnost', 'model:u-k-t-i-o-app-oborudovanie', 'model:u-k-t-i-o-app-organizaciya', 'model:u-k-t-i-o-app-sotrudnik', 'model:u-k-t-i-o-app-tip-oborudovaniya', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/u-k-t-i-o-app-organizaciya-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('u-k-t-i-o-app-organizaciya', 'Unit | Serializer | u-k-t-i-o-app-organizaciya', {
    // Specify the other units that are required for this test.
    needs: ['serializer:u-k-t-i-o-app-organizaciya', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:u-k-t-i-o-app-t-status', 'model:u-k-t-i-o-app-dolzhnost', 'model:u-k-t-i-o-app-oborudovanie', 'model:u-k-t-i-o-app-organizaciya', 'model:u-k-t-i-o-app-sotrudnik', 'model:u-k-t-i-o-app-tip-oborudovaniya', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/u-k-t-i-o-app-sotrudnik-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('u-k-t-i-o-app-sotrudnik', 'Unit | Serializer | u-k-t-i-o-app-sotrudnik', {
    // Specify the other units that are required for this test.
    needs: ['serializer:u-k-t-i-o-app-sotrudnik', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:u-k-t-i-o-app-t-status', 'model:u-k-t-i-o-app-dolzhnost', 'model:u-k-t-i-o-app-oborudovanie', 'model:u-k-t-i-o-app-organizaciya', 'model:u-k-t-i-o-app-sotrudnik', 'model:u-k-t-i-o-app-tip-oborudovaniya', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/u-k-t-i-o-app-tip-oborudovaniya-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('u-k-t-i-o-app-tip-oborudovaniya', 'Unit | Serializer | u-k-t-i-o-app-tip-oborudovaniya', {
    // Specify the other units that are required for this test.
    needs: ['serializer:u-k-t-i-o-app-tip-oborudovaniya', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'transform:u-k-t-i-o-app-t-status', 'model:u-k-t-i-o-app-dolzhnost', 'model:u-k-t-i-o-app-oborudovanie', 'model:u-k-t-i-o-app-organizaciya', 'model:u-k-t-i-o-app-sotrudnik', 'model:u-k-t-i-o-app-tip-oborudovaniya', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('UKTIO_App/config/environment', [], function() {
  var prefix = 'UKTIO_App';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('UKTIO_App/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map

import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  familia: DS.attr('string'),
  imya: DS.attr('string'),
  otchestvo: DS.attr('string'),
  /**
    Non-stored property.

    @property fIO
  */
  fIO: DS.attr('string'),
  /**
    Method to set non-stored property.
    Please, use code below in model class (outside of this mixin) otherwise it will be replaced during regeneration of models.
    Please, implement 'fIOCompute' method in model class (outside of this mixin) if you want to compute value of 'fIO' property.

    @method _fIOCompute
    @private
    @example
      ```javascript
      _fIOChanged: on('init', observer('fIO', function() {
        once(this, '_fIOCompute');
      }))
      ```
  */
  _fIOCompute: function() {
    let result = (this.fIOCompute && typeof this.fIOCompute === 'function') ? this.fIOCompute() : null;
    this.set('fIO', result);
  },
  tel: DS.attr('string'),
  email: DS.attr('string'),
  nomerKabineta: DS.attr('number'),
  dolzhnost: DS.belongsTo('u-k-t-i-o-app-dolzhnost', { inverse: null, async: false }),
  organizaciya: DS.belongsTo('u-k-t-i-o-app-organizaciya', { inverse: null, async: false })
});

export let ValidationRules = {
  familia: {
    descriptionKey: 'models.u-k-t-i-o-app-sotrudnik.validations.familia.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  imya: {
    descriptionKey: 'models.u-k-t-i-o-app-sotrudnik.validations.imya.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  otchestvo: {
    descriptionKey: 'models.u-k-t-i-o-app-sotrudnik.validations.otchestvo.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  fIO: {
    descriptionKey: 'models.u-k-t-i-o-app-sotrudnik.validations.fIO.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  tel: {
    descriptionKey: 'models.u-k-t-i-o-app-sotrudnik.validations.tel.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  email: {
    descriptionKey: 'models.u-k-t-i-o-app-sotrudnik.validations.email.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  nomerKabineta: {
    descriptionKey: 'models.u-k-t-i-o-app-sotrudnik.validations.nomerKabineta.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  dolzhnost: {
    descriptionKey: 'models.u-k-t-i-o-app-sotrudnik.validations.dolzhnost.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  organizaciya: {
    descriptionKey: 'models.u-k-t-i-o-app-sotrudnik.validations.organizaciya.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('SotrudnikE', 'u-k-t-i-o-app-sotrudnik', {
    familia: attr('Фамилия', { index: 0 }),
    imya: attr('Имя', { index: 1 }),
    otchestvo: attr('Отчество', { index: 2 }),
    tel: attr('Телефон', { index: 3 }),
    email: attr('Емейл', { index: 4 }),
    nomerKabineta: attr('Номер кабинета', { index: 5 }),
    dolzhnost: belongsTo('u-k-t-i-o-app-dolzhnost', 'Должность', {
      naimenovanie: attr('Наименование', { index: 7, hidden: true })
    }, { index: 6, displayMemberPath: 'naimenovanie' }),
    organizaciya: belongsTo('u-k-t-i-o-app-organizaciya', 'Организация', {
      nazvanie: attr('Nazvanie', { index: 9, hidden: true })
    }, { index: 8, displayMemberPath: 'nazvanie' })
  });

  modelClass.defineProjection('SotrudnikL', 'u-k-t-i-o-app-sotrudnik', {
    familia: attr('Фамилия', { index: 0 }),
    imya: attr('Имя', { index: 1 }),
    otchestvo: attr('отчество', { index: 2 }),
    tel: attr('Телефон', { index: 3 }),
    email: attr('Емейл', { index: 4 }),
    nomerKabineta: attr('Номер кабинета', { index: 5 }),
    dolzhnost: belongsTo('u-k-t-i-o-app-dolzhnost', 'Наименование', {
      naimenovanie: attr('Наименование', { index: 6 })
    }, { index: -1, hidden: true }),
    organizaciya: belongsTo('u-k-t-i-o-app-organizaciya', 'Название', {
      nazvanie: attr('Название', { index: 7 })
    }, { index: -1, hidden: true })
  });
};

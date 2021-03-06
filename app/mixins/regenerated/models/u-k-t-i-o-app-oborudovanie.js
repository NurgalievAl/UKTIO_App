import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  invNomer: DS.attr('number'),
  naimenovanie: DS.attr('string'),
  harakteristiki: DS.attr('string'),
  dataPokupki: DS.attr('date', { defaultValue() { return new Date(); } }),
  cena: DS.attr('decimal'),
  status: DS.attr('u-k-t-i-o-app-t-status'),
  tipOborudovaniya: DS.belongsTo('u-k-t-i-o-app-tip-oborudovaniya', { inverse: null, async: false }),
  sotrudnik: DS.belongsTo('u-k-t-i-o-app-sotrudnik', { inverse: null, async: false })
});

export let ValidationRules = {
  invNomer: {
    descriptionKey: 'models.u-k-t-i-o-app-oborudovanie.validations.invNomer.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  naimenovanie: {
    descriptionKey: 'models.u-k-t-i-o-app-oborudovanie.validations.naimenovanie.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  harakteristiki: {
    descriptionKey: 'models.u-k-t-i-o-app-oborudovanie.validations.harakteristiki.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  dataPokupki: {
    descriptionKey: 'models.u-k-t-i-o-app-oborudovanie.validations.dataPokupki.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  cena: {
    descriptionKey: 'models.u-k-t-i-o-app-oborudovanie.validations.cena.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  status: {
    descriptionKey: 'models.u-k-t-i-o-app-oborudovanie.validations.status.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  tipOborudovaniya: {
    descriptionKey: 'models.u-k-t-i-o-app-oborudovanie.validations.tipOborudovaniya.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  sotrudnik: {
    descriptionKey: 'models.u-k-t-i-o-app-oborudovanie.validations.sotrudnik.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('OborudovanieE', 'u-k-t-i-o-app-oborudovanie', {
    invNomer: attr('?????????????????????? ??????????', { index: 0 }),
    naimenovanie: attr('????????????????????????', { index: 1 }),
    harakteristiki: attr('????????????????????????????', { index: 2 }),
    dataPokupki: attr('???????? ??????????????', { index: 3 }),
    cena: attr('????????', { index: 4 }),
    status: attr('????????????', { index: 5 }),
    tipOborudovaniya: belongsTo('u-k-t-i-o-app-tip-oborudovaniya', '?????? ????????????????????????', {
      naimenovanie: attr('????????????????????????', { index: 7, hidden: true })
    }, { index: 6, displayMemberPath: 'naimenovanie' }),
    sotrudnik: belongsTo('u-k-t-i-o-app-sotrudnik', '??????????????????', {
      fIO: attr('', { index: 9, hidden: true }),
      imya: attr('', { index: 10, hidden: true }),
      otchestvo: attr('', { index: 11, hidden: true }),
      familia: attr('Familia', { index: 12, hidden: true })
    }, { index: 8, displayMemberPath: 'fIO' })
  });

  modelClass.defineProjection('OborudovanieL', 'u-k-t-i-o-app-oborudovanie', {
    invNomer: attr('?????????????????????? ??????????', { index: 0 }),
    naimenovanie: attr('????????????????????????', { index: 1 }),
    harakteristiki: attr('????????????????????????????', { index: 2 }),
    dataPokupki: attr('???????? ??????????????', { index: 3 }),
    cena: attr('????????', { index: 4 }),
    status: attr('????????????', { index: 5 }),
    tipOborudovaniya: belongsTo('u-k-t-i-o-app-tip-oborudovaniya', '?????? ????????????????????????', {
      naimenovanie: attr('?????? ????????????????????????', { index: 6 })
    }, { index: -1, hidden: true }),
    sotrudnik: belongsTo('u-k-t-i-o-app-sotrudnik', '??????????????????', {
      fIO: attr('??????????????????', { index: 7 }),
      imya: attr('', { index: 8, hidden: true }),
      otchestvo: attr('', { index: 9, hidden: true }),
      familia: attr('Familia', { index: 10, hidden: true })
    }, { index: -1, hidden: true })
  });
};

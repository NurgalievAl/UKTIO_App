import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  naimenovanie: DS.attr('string')
});

export let ValidationRules = {
  naimenovanie: {
    descriptionKey: 'models.u-k-t-i-o-app-tip-oborudovaniya.validations.naimenovanie.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('TipOborudovaniyaE', 'u-k-t-i-o-app-tip-oborudovaniya', {
    naimenovanie: attr('Наименование', { index: 0 })
  });

  modelClass.defineProjection('TipOborudovaniyaL', 'u-k-t-i-o-app-tip-oborudovaniya', {
    naimenovanie: attr('Наименование', { index: 0 })
  });
};

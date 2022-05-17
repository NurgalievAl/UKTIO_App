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
    descriptionKey: 'models.u-k-t-i-o-app-dolzhnost.validations.naimenovanie.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('DolzhnostE', 'u-k-t-i-o-app-dolzhnost', {
    naimenovanie: attr('Наименование', { index: 0 })
  });

  modelClass.defineProjection('DolzhnostL', 'u-k-t-i-o-app-dolzhnost', {
    naimenovanie: attr('Наименование', { index: 0 })
  });
};

import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  nazvanie: DS.attr('string')
});

export let ValidationRules = {
  nazvanie: {
    descriptionKey: 'models.u-k-t-i-o-app-organizaciya.validations.nazvanie.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('OrganizaciyaE', 'u-k-t-i-o-app-organizaciya', {
    nazvanie: attr('Название', { index: 0 })
  });

  modelClass.defineProjection('OrganizaciyaL', 'u-k-t-i-o-app-organizaciya', {
    nazvanie: attr('Название', { index: 0 })
  });
};

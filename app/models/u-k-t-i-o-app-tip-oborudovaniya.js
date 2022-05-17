import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';
import OfflineModelMixin from 'ember-flexberry-data/mixins/offline-model';

import {
  defineProjections,
  ValidationRules,
  Model as TipOborudovaniyaMixin
} from '../mixins/regenerated/models/u-k-t-i-o-app-tip-oborudovaniya';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(OfflineModelMixin, TipOborudovaniyaMixin, Validations, {
});

defineProjections(Model);

export default Model;

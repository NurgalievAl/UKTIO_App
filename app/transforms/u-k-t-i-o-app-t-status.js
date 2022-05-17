import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import tStatusEnum from '../enums/u-k-t-i-o-app-t-status';

export default FlexberryEnum.extend({
  enum: tStatusEnum,
  sourceType: 'UKTIO_App.tStatus'
});

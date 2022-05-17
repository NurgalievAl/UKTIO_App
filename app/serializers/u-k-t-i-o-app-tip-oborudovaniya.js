import { Serializer as TipOborudovaniyaSerializer } from
  '../mixins/regenerated/serializers/u-k-t-i-o-app-tip-oborudovaniya';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(TipOborudovaniyaSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});

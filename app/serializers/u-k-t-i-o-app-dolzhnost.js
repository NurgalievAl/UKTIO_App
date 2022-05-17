import { Serializer as DolzhnostSerializer } from
  '../mixins/regenerated/serializers/u-k-t-i-o-app-dolzhnost';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(DolzhnostSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});

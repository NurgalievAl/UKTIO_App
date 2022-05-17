import { Serializer as OborudovanieSerializer } from
  '../mixins/regenerated/serializers/u-k-t-i-o-app-oborudovanie';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(OborudovanieSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});

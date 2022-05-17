import { Serializer as SotrudnikSerializer } from
  '../mixins/regenerated/serializers/u-k-t-i-o-app-sotrudnik';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(SotrudnikSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});

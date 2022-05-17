import { Serializer as OrganizaciyaSerializer } from
  '../mixins/regenerated/serializers/u-k-t-i-o-app-organizaciya';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(OrganizaciyaSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});

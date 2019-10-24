import { belongsTo, property } from '@pyre';

export default {
  data: property('object'),
  name: property('string'),
  timstamp: property('datetime'),
  card: belongsTo(),
  user: belongsTo()
};

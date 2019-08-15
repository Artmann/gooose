import { belongsTo, property } from '../model';

export default {
  data: property('object'),
  name: property('string'),
  timstamp: property('datetime'),
  user: belongsTo()
};

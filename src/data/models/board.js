import { hasMany, property } from '../model';

export default {
  name: property('string'),

  columns: hasMany('column')
};

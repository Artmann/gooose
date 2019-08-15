import { belongsTo, hasMany, property } from '../model';

export default {
  blocked: property('bool'),
  color: property('string'),
  key: property('string'),
  order: property('number'),
  text: property('string'),
  timstamp: property('datetime'),

  board: belongsTo('board'),
  column: belongsTo('column'),
  events: hasMany('events')
};

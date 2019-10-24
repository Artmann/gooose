import { belongsTo, hasMany, property } from '@pyre';

export default {
  blocked: property('bool'),
  color: property('string'),
  key: property('string'),
  order: property('number'),
  text: property('string'),
  timstamp: property('datetime'),

  board: belongsTo('board'),
  column: belongsTo('column'),
  cardEvents: hasMany('cardEvent')
};

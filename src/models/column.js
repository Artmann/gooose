import { belongsTo, hasMany, property } from '@pyre';

export default {
  name: property('string'),

  board: belongsTo('board'),
  cards: hasMany('card')
};

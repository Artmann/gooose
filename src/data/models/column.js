import { belongsTo, hasMany, property } from '../model';

export default {
  name: property('string'),

  board: belongsTo('board'),
  cards: hasMany('card')
};

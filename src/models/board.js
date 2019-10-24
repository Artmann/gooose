import { Model, attr, hasMany } from 'react-courier';

export default class Board extends Model {
  static fields = {
    name: attr('string'),
    columns: hasMany('column')
  };
};

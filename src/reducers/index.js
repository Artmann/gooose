import auth from './auth';
import { combineReducers } from 'redux';
import data from './data';

export default combineReducers({
  auth,
  data
});

import { applyMiddleware, createStore } from 'redux';

import applyEffects from 'effectful';
import effects from '../effects';
import reducer from '../reducers';
import thunk from 'redux-thunk';

const store = createStore(
  reducer,
  applyMiddleware(thunk, applyEffects(effects))
);

export default store;

import React from 'react';
import { createStore } from 'react-courier';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'whatwg-fetch';

import './main.css';

import App from './app';
import lazyLoadAssets from './lazy-load-assets';
import Board from './models/board';
import * as serviceWorker from './serviceWorker';
import store from './store';

const courierStore = createStore({
  host: 'https://my-board-api.herokuapp.com'
});

courierStore.registerModels(Board);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

lazyLoadAssets();

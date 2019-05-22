import './styles/main.scss';
import 'whatwg-fetch';

import * as serviceWorker from './serviceWorker';

import App from './app';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import lazyLoadAssets from './lazy-load-assets';
import store from './store';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient();

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

lazyLoadAssets();

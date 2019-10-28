import './main.css';
import 'whatwg-fetch';

import * as serviceWorker from './serviceWorker';

import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './app';
import lazyLoadAssets from './lazy-load-assets';
import store from './store';

const client = new ApolloClient({
  uri: 'https://api.gooose.app/graphql',
});

ReactDOM.render(
  <ApolloProvider client={ client }>
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

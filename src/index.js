import './main.css';
import 'whatwg-fetch';

import * as serviceWorker from './serviceWorker';

import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { setContext } from 'apollo-link-context';
import { createHttpLink } from 'apollo-link-http';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';
import lazyLoadAssets from './lazy-load-assets';

const httpLink = createHttpLink({
  uri: 'https://api.gooose.app/graphql'
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('gooose:token');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    }
  }
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink)
});

ReactDOM.render(
  <ApolloProvider client={ client }>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

lazyLoadAssets();

import React from 'react';
import { Provider } from 'react-redux';

import App from './app';
import store from './store';

export default function AppWrapper() {
  return (
    <Provider store={ store }>
      <App />
    </Provider>
  );
}

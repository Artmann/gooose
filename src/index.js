import './main.css';
import 'whatwg-fetch';

import * as serviceWorker from './serviceWorker';

import AppWrapper from './app-wrapper';
import React from 'react';
import ReactDOM from 'react-dom';
import lazyLoadAssets from './lazy-load-assets';


ReactDOM.hydrate(<AppWrapper />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

lazyLoadAssets();

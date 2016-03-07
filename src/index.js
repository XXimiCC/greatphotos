import 'normalize.css';
import 'styles/index.scss';
import 'materialize.css';
import 'materialize.js';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './stores';
import AppRouter from './router';


const store = configureStore();

render(
  <Provider store={store}>
    <AppRouter></AppRouter>
  </Provider>,
  document.getElementById('app')
);

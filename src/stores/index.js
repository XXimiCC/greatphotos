import thunkMiddleware from 'redux-thunk';
import * as redux from 'redux';
import reducers from '../reducers/index';
import initialState from './initialState';
import {routerMiddleware} from 'react-router-redux'


export default function createStore(history, enhancer) {
  function createStore() {
    const store = redux.createStore(reducers, initialState, enhancer);

    if (module.hot) {
      // Enable Webpack hot module replacement for reducers
      module.hot.accept('../reducers', () => {
        const nextReducer = require('../reducers');
        store.replaceReducer(nextReducer)
      })
    }

    return store
  }

  return redux.applyMiddleware(
      thunkMiddleware,
      routerMiddleware(history)
  )(createStore)();
}




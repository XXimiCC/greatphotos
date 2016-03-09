import thunkMiddleware from 'redux-thunk';
import * as redux from 'redux';
import reducers from '../reducers';
import initialState from './initialState';

function createStore() {
  const store = redux.createStore(reducers, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer)
    })
  }

  return store
}

const createStoreWithMiddleware = redux.applyMiddleware(
    thunkMiddleware
)(createStore);

export default createStoreWithMiddleware;

import 'styles/index.scss';
import 'materialize.css';
import 'materialize.js';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import createStore from './stores';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router'
import App from './containers/App';
import LoginPage from './components/LoginPage';
import RegistrationPage from './components/RegistrationPage';
import Home from './containers/Home';
import ImagesList from './components/ImagesList';
import { syncHistoryWithStore} from 'react-router-redux';
import handleTransitions from 'redux-history-transitions';

const enhancer = handleTransitions(browserHistory);

const store = createStore(browserHistory, enhancer);
console.log('Initial state', store.getState().toJS());

//React-router-redux config

const history = syncHistoryWithStore(browserHistory, store, {
    //override method for get routing info from state
    selectLocationState: function (state) {
        return state.get('routing').toJS();
    }
});

render(
  <Provider store={store}>
      <Router history={history}>
          <Route path="/" component={App}>
              <IndexRedirect to="/login" />
              <Route path="login" component={LoginPage}/>
              <Route path="registration" component={RegistrationPage}/>
          </Route>
          <Route path="/" component={Home}>
              <IndexRedirect to="/home" />
              <Route path="home" component={ImagesList}/>
          </Route>
      </Router>
  </Provider>,
  document.getElementById('app')
);

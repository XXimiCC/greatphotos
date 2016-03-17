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
import Container from './containers/Container';
import ImagesList from './components/ImagesList';
import { syncHistoryWithStore} from 'react-router-redux';
import handleTransitions from 'redux-history-transitions';
import accessor from './authValidation';

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

const validators = accessor(store);

render(
  <Provider store={store}>
      <Router history={history}>
          <Route component={App}>
              <IndexRedirect to="/login" />
              <Route path="/" component={Container}>
                  <Route path="login" onEnter={validators.onlyGuest} component={LoginPage}/>
                  <Route path="registration" onEnter={validators.onlyGuest} component={RegistrationPage}/>
              </Route>
              <Route path="/" component={Home}>
                  <IndexRedirect to="/home" />
                  <Route path="home" component={ImagesList}/>
              </Route>
          </Route>

      </Router>
  </Provider>,
  document.getElementById('app')
);
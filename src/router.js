import React from 'react';

import { Router, Route, browserHistory } from 'react-router'
import App from './containers/App';
import LoginPage from './components/login/LoginPage';
import RegistrationPage from './components/registration/RegistrationPage';

class AppRouter extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={App}>
                    <Route path="login" component={LoginPage}/>
                    <Route path="registration" component={RegistrationPage}/>
                </Route>
            </Router>
        );
    }
}

export default AppRouter;

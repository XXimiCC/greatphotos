import React from 'react';

import CenterContentWrapper from './CenterContentWrapper';
import LoginForm from './LoginForm';

class LoginPage extends React.Component {
    render() {
        return (
            <CenterContentWrapper>
                <LoginForm id="login-form"></LoginForm>
            </CenterContentWrapper>
        );
    }
}

export default LoginPage;

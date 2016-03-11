import React from 'react';

import CenterContentWrapper from './CenterContentWrapper';
import RegistrationForm from './RegistrationForm';

class RegistrationPage extends React.Component {
    render() {
        return (
            <CenterContentWrapper>
                <RegistrationForm id="registration-form"></RegistrationForm>
            </CenterContentWrapper>
        );
    }
}

export default RegistrationPage;

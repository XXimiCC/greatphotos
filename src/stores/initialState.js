import Immutable from 'immutable';

export default Immutable.fromJS({
    user: {
        currentUser: null
    },
    loginForm: {
        loading: false,
        canSubmit: false,
        errors: null,
        resetPassword: false
    },
    registration: {
        loading: false
    }
});
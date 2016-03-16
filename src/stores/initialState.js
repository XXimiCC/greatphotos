import Immutable from 'immutable';

export default Immutable.fromJS({
    user: {
        currentUser: null
    },
    loginForm: {
        loading: false,
        canSubmit: false,
        errors: null
    },
    registrationForm: {
        loading: false,
        canSubmit: false,
        errors: null
    },
    home: {
        imagesList: {
            pageSize: 20,
            list: []
        }
    }

});
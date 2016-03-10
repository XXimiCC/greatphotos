import Immutable from 'immutable';

export default Immutable.fromJS({
    user: {
        loading: false,
        currentUser: null
    },
    registration: {
        loading: false
    }
});
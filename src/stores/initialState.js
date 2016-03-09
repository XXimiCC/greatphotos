import Immutable from 'immutable';

export default Immutable.fromJS({
    user: {
        loading: false,
        currentUser: null
    },
    users: {
        loading: false,
        usersList: []
    }
});
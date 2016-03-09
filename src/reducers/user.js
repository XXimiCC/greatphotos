import * as actions from '../actions/actionTypes';

function user(state, action) {
    switch (action.type) {
        case actions.LOGIN_USER_REQUEST:
            let user = state.get('user').set("loading", true);

            return state.set('user', user);
        case actions.LOGIN_USER_SUCCESS:
            let user = state.get('user').set('currentUser', action.user).set('loading', false);

            return state.set("user", user);
    }

    return state;
}

function users(state, action) {
    switch (action.type) {
        case actions.CREATE_USER_REQUEST:
            let users = state.get('users').set("loading", true);

            return state.set('users', users);
        case actions.CREATE_USER_SUCCESS:
            let users = state.get('users').set('loading', false);

            return state.set('users', users);
    }

    return state;
}
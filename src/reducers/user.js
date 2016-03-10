import * as actions from '../actions/actionTypes';

export function user(state, action) {
    switch (action.type) {
        case actions.LOGIN_USER_REQUEST:
            return state.set('loading', true);
        case actions.LOGIN_USER_SUCCESS:
            return state.set('currentUser', action.payload.user).set('loading', false);
        default:
            return state;
    }
}

export function registration(state, action) {
    switch (action.type) {
        case actions.REGISTRATION_REQUEST:
            return state.set('loading', true);
        case actions.REGISTRATION_SUCCESS:
            return state.set('loading', false);
        case actions.REGISTRATION_FAILURE:
            return state.set('loading', false);
        default:
            return state;
    }
}

import * as actions from '../actions/actionTypes';

export function user(state, action) {
    switch (action.type) {
        case actions.LOGIN_USER_SUCCESS:
            return state.set('currentUser', action.payload.user);
        case actions.CHECK_USER_SUCCESS:
            return state.set('currentUser', action.payload.user);
        case actions.LOGOUT_SUCCESS:
            return state.set('currentUser', null);
        default:
            return state;
    }
}

export function loginForm(state, action) {
    switch (action.type) {
        case actions.LOGIN_USER_REQUEST:
            return state.set('loading', true);
        case actions.LOGIN_USER_SUCCESS:
            return state.set('loading', false);
        case actions.LOGIN_USER_FAILURE:
            return state
                .set('errors', action.payload.errors)
                .set('loading', false);
        case actions.LOGIN_CAN_SUBMIT:
            return state.set('canSubmit', action.payload.canSubmit);
        case actions.LOGIN_SET_ERRORS:
            return state.set('errors', action.payload.errors);
        default:
            return state;
    }
}

export function registrationForm(state, action) {
    switch (action.type) {
        case actions.REGISTRATION_REQUEST:
            return state.set('loading', true);
        case actions.REGISTRATION_SUCCESS:
            return state.set('loading', false);
        case actions.REGISTRATION_FAILURE:
            return state
                .set('errors', action.payload.errors)
                .set('loading', false);
        case actions.REGISTRATION_CAN_SUBMIT:
            return state.set('canSubmit', action.payload.canSubmit);
        case actions.REGISTRATION_SET_ERRORS:
            return state.set('errors', action.payload.errors);
        default:
            return state;
    }
}

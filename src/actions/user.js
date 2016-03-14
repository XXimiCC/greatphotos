import * as actions from './actionTypes';
import User from '../models/User';

export function requestLogin(username, password) {
    return {
        type: actions.LOGIN_USER_REQUEST,
        payload: {
            username,
            password
        }
    }
}

export function successLogin(user) {
    return {
        type: actions.LOGIN_USER_SUCCESS,
        payload: {
            user
        },
        meta: {
            transition: () => ({
                pathname: '/list'
            })
        }
    }
}

export function failureLogin(errors) {
    return {
        type: actions.LOGIN_USER_FAILURE,
        payload: {
            errors
        }
    }
}

export function login(username, password) {
    return function (dispatch) {
        dispatch(requestLogin(username, password));

        setTimeout(function () {
            User.findUser(username, password)
                .then(function (user) {
                    dispatch(successLogin(user));
                })
                .catch(function (errors) {
                    dispatch(failureLogin(errors));
                });
        }, 1000);

    }
}

export function requestRegistration(user) {
    return {
        type: actions.REGISTRATION_REQUEST,
        payload: {
            user
        }
    }
}

export function successRegistration(user) {
    return {
        type: actions.REGISTRATION_SUCCESS,
        payload: {
            user
        },
        meta: {
            transition: () => ({
                pathname: '/login'
            })
        }
    }
}

export function failureRegistration(errors) {
    return {
        type: actions.REGISTRATION_FAILURE,
        payload: {
            errors
        }
    }
}


export function registration(user) {
    return function (dispatch) {
        dispatch(requestRegistration(user));

        setTimeout(function () {
            User.createUser(user)
            .then(function (user) {
                dispatch(successRegistration(user));
            })
            .catch(function (errors) {
                dispatch(failureRegistration(errors));
            })
        }, 1000);
    }
}

export function loginCanSubmit(canSubmit) {
    return {
        type: actions.LOGIN_CAN_SUBMIT,
        payload: {
            canSubmit
        }
    }
}

export function loginSetErrors(errors) {
    return {
        type: actions.LOGIN_SET_ERRORS,
        payload: {
            errors: errors
        }
    }
}


export function registrationCanSubmit(canSubmit) {
    return {
        type: actions.REGISTRATION_CAN_SUBMIT,
        payload: {
            canSubmit
        }
    }
}

export function registrationSetErrors(errors) {
    return {
        type: actions.REGISTRATION_SET_ERRORS,
        payload: {
            errors: errors
        }
    }
}
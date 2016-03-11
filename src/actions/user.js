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
                pathname: '/registration'
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
                    dispatch(loginResetPassword(true));
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
        }
    }
}

export function failureRegistration(error) {
    return {
        type: actions.REGISTRATION_FAILURE,
        payload: {
            error
        }
    }
}


export function registration(user) {
    return function (dispatch) {
        dispatch(requestRegistration(user));

        return User.createUser(user)
            .then(function (user) {
                dispatch(successRegistration(user));
            })
            .catch(function (error) {
                dispatch(failureRegistration(error));
            })
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
export function loginResetPassword(resetPassword) {
    return {
        type: actions.LOGIN_RESET_PASSWORD,
        payload: {
            resetPassword
        }
    }
}
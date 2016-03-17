import * as actions from './actionTypes';
import User from '../sources/User';
import Auth from '../sources/Auth';


/** LOGIN  **/
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
                pathname: '/home'
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

        return Auth.login(username, password)
            .then(function (user) {
                dispatch(successLogin(user));
            })
            .catch(function (errors) {
                dispatch(failureLogin(errors));
            });
    }
}


/** REGISTRATION **/
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

        return User.createUser(user)
            .then(function (user) {
                dispatch(successRegistration(user));
            })
            .catch(function (errors) {
                dispatch(failureRegistration(errors));
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

/** USER CHECK **/
export function requestCheckUser() {
    return {
        type: actions.CHECK_USER_REQUEST,
        payload: {}
    }
}

export function successCheckUser(user) {
    return {
        type: actions.CHECK_USER_SUCCESS,
        payload: {
            user
        }
    }
}

export function failureCheckUser(errors) {
    return {
        type: actions.CHECK_USER_FAILURE,
        payload: {
            errors
        }
    }
}

export function check() {
    return function (dispatch) {
        dispatch(requestCheckUser());

        return Auth.check().then(function (user) {
                dispatch(successCheckUser(user));

                return user;
            })
            .catch(function (errors) {
                dispatch(failureCheckUser(errors));

                return errors;
            });
    }
}

/** LOGOUT **/
export function requestLogout() {
    return {
        type: actions.LOGOUT_REQUEST,
        payload: {}
    }
}

export function successLogout(user) {
    return {
        type: actions.LOGOUT_SUCCESS,
        payload: {
            user
        }
    }
}

export function failureLogout(errors) {
    return {
        type: actions.LOGOUT_FAILURE,
        payload: {
            errors
        }
    }
}

export function logout() {
    return function (dispatch) {
        dispatch(requestLogout());

        return Auth.logout().then(function (user) {
            dispatch(successLogout());

            return user;
        })
        .catch(function (errors) {
            dispatch(failureLogout(errors));

            return errors;
        });
    }
}
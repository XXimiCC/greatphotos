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

export function failureLogin(error) {
    return {
        type: actions.LOGIN_USER_FAILURE,
        payload: {
            error
        }
    }
}

export function login(username, password) {
    return function (dispatch) {
        dispatch(requestLogin(username, password));

        User.findUser(username, password)
            .then(function (user) {
                dispatch(successLogin(user));
            })
            .catch(function (error) {
                dispatch(failureLogin(error));
            })
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
                console.error(error);
                dispatch(failureRegistration(error));
            })
    }
}
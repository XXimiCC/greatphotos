import * as actions from './actionTypes';
import User from '../models/User';

export function requestLogin(login, password) {
    return {
        type: actions.LOGIN_USER_REQUEST,
        login,
        password
    }
}

export function successLogin(user) {
    return {
        type: actions.LOGIN_USER_SUCCESS,
        user
    }
}

export function failureLogin(error) {
    return {
        type: actions.LOGIN_USER_FAILURE,
        error
    }
}

export function login(username, password) {
    return function (dispatch) {
        dispatch(requestLogin.apply(null, arguments));

        User.findUser(username, password)
            .then(function (user) {
                dispatch(successLogin(user));
            })
            .catch(function (error) {
                dispatch(failureLogin(error));
            })
    }
}

export function requestCreateUser(user) {
    return {
        type: actions.CREATE_USER_REQUEST,
        user
    }
}

export function successCreateUser(user) {
    return {
        type: actions.CREATE_USER_SUCCESS,
        user
    }
}

export function failureCreateUser(error) {
    return {
        type: actions.CREATE_USER_FAILURE,
        error
    }
}


export function registration(user) {
    return function (dispatch) {
        dispatch(requestCreateUser.apply(null, arguments));

        User.createUser(user)
            .then(function (user) {
                dispatch(successCreateUser(user));
            })
            .catch(function (error) {
                dispatch(failureCreateUser(error));
            })
    }
}
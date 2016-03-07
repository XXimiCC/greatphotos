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

export function login(login, password) {
    return function (dispatch) {
        dispatch(requestLogin.apply(null, arguments));

        User.findUser(login, password)
            .then(function (user) {
                dispatch(successLogin(user));
            })
            .catch(function (error) {
                dispatch(failureLogin(error));
            })
    }
}
import { LOGIN_REQUESTED,
    FETCH_LOGIN_SUCCESS,
    LOGIN_FAILED,
    REGISTER_USER_REQUESTED,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILED,
    LOGOUT
       } from '../const-types/const-types';

import {getEndPoint} from '../apiHandler';

export function loginFailed(bool) {
    return {
        type: LOGIN_FAILED,
        loginFailed: bool
    };
}
export function loginRequested(bool) {
    return {
        type: LOGIN_REQUESTED,
        isLoading: bool
    };
}
export function fetchLoginSuccess(user) {
    return {
        type: FETCH_LOGIN_SUCCESS,
        user
    };
}

export function registerUserRequested(bool){
    return {
        type: REGISTER_USER_REQUESTED,
        isLoading : bool
    }
}

export function registerUserSuccess(user) {
    return {
        type: REGISTER_USER_SUCCESS,
        user
    };
}

export function registerUserFailed(bool) {
    return {
        type: REGISTER_USER_FAILED,
        registerFailed : bool
    };
}

export function logout() {
    return {
        type: LOGOUT
    };
}


const optionsRequest = {
        method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
  }

export function registerUser(formBody) {
    return (dispatch) => {
        dispatch(registerUserRequested(true));
        fetch(getEndPoint(REGISTER_USER_REQUESTED), {...optionsRequest, body: JSON.stringify(formBody)})
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(registerUserRequested(false));
                return response;
            })
            .then((response) => response.json())
            .then((user) => {
                dispatch(registerUserSuccess(user))
                dispatch(registerUserFailed(false))
            })
            .catch(() => dispatch(registerUserFailed(true)));
    };
}

export function login(formBody) {
    return (dispatch) => {
        dispatch(loginRequested(true));
        fetch(getEndPoint(LOGIN_REQUESTED), {...optionsRequest, body: JSON.stringify(formBody)})
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(loginRequested(false));
                return response;
            })
            .then((response) => response.json())
            .then((user) => {
                dispatch(fetchLoginSuccess(user))
                dispatch(loginFailed(false))
            })
            .catch(() => dispatch(loginFailed(true)));
    };
}

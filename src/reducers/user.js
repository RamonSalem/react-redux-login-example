import { LOGIN_REQUESTED,
    FETCH_LOGIN_SUCCESS,
    LOGIN_FAILED,
    REGISTER_USER_REQUESTED,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILED,
    LOGOUT
       } from '../const-types/const-types';


export function loginFailed(state = false, action) {
    switch (action.type) {
        case LOGIN_FAILED:
            return action.loginFailed;
        default:
            return state;
    }
}
export function loginLoading(state = false, action) {
    switch (action.type) {
        case LOGIN_REQUESTED:
            return action.isLoading;
        default:
            return state;
    }
}

export function user(state = {}, action) {
    switch (action.type) {
        case FETCH_LOGIN_SUCCESS:
            return {...state, ...action.user};
        case REGISTER_USER_SUCCESS:
            return {...state, ...action.user};
        case LOGOUT:
            return {}
        default:
            return state;
    }
}

export function registerUserFailed(state = false, action) {
    switch (action.type) {
        case REGISTER_USER_FAILED:
            return action.registerFailed;
        default:
            return state;
    }
}
export function registerUserLoading(state = false, action) {
    switch (action.type) {
        case REGISTER_USER_REQUESTED:
            return action.isLoading;
        default:
            return state;
    }
}
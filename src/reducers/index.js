import {combineReducers} from 'redux';
import {registerUserFailed, 
    registerUserLoading,  
    loginFailed,
    loginLoading,
    user
} from './user';

export default combineReducers({
    registerUserFailed,
    registerUserLoading,
    loginFailed,
    loginLoading,
    user
});
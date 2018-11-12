import {REGISTER_USER_REQUESTED,
        LOGIN_REQUESTED
    } from './const-types/const-types';

const endPoint = 'https://api.dev.talkative.media';
/**
 * Gets the api route depending on which action was dispatched
 */
export const getEndPoint = (type)=>{
    switch(type){
        case REGISTER_USER_REQUESTED:
            return `${endPoint}/v1/signup/email-and-password/`;
        case LOGIN_REQUESTED:
            return `${endPoint}/v1/login/email-and-password/`;
        default:
            return '';        
    }
} 

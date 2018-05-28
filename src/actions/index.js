//action creator -> handling user typing sth in loginform
import { 
    EMAIL_CHANGED,
    PASSWORD_CHANGED
 } from './types';


export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};
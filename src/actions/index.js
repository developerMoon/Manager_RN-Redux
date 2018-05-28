//action creator -> handling user typing sth in loginform
import { EMAIL_CHANGED } from './types';


export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};
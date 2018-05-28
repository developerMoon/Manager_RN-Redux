import firebase from 'firebase';

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

//new action creator
export const loginUser = ({email, password}) => {
    //request to firebase server
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => console.log(user));
};
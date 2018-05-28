import firebase from 'firebase';

//action creator -> handling user typing sth in loginform
import { 
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS
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
    return (dispatch) => { //check diagram
    //by giving access to dispatch, we can call dispatch whenever we want
    //request to firebase server
    //실제 로그인하는 부분
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => {
            dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
        });
    };
};
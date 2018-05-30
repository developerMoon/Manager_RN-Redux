import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
//action creator -> handling user typing sth in loginform
import { 
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER
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
export const loginUser = ({ email, password }) => {
    return (dispatch) => { //check diagram
    //by giving access to dispatch, we can call dispatch whenever we want
    //request to firebase server
    //실제 로그인하는 부분

    dispatch({ type: LOGIN_USER });

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => loginUserSuccess(dispatch, user))
        //로그인에 실패할 경우
        .catch((error)=>{
            console.log(error);
            //새로 아이디 만들고 로그인시키기
 
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user))
            //로그인에 실패할 경우
            .catch(() => loginUserFail(dispatch));
        });
    };
};

const loginUserFail = (dispatch) => {
    dispatch({ type: LOGIN_USER_FAIL });
};

//where we know user successfully logged in
//navigate user from loginform -> employeelist
const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });
    //Actions.[scene name] -> navigate to that scene
    Actions.main(); //automatically generate back button
};
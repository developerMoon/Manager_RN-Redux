import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEES_FETCH_SUCCESS
} from './types';

export const employeeUpdate = ({ prop, value }) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }
    };
};

export const employeeCreate = ({ name, phone, shift }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        //put inserted shift info to firebase
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .push({ name, phone, shift })
            .then(()=> {
                dispatch({ type: EMPLOYEE_CREATE});
                Actions.pop();
        }); //.pop()for current version
    }; //this will be called by redux thunk
    //after saved to database - last data remains in form
};
//fetch data to replace employee list
export const employeesFetch = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
        .on('value', snapshot => {
            dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
            //snapshot.val -> get data
            //redux get changed data immediately with firebase
        });
    };
};
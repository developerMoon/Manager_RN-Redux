import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED
} from '../actions/types'; //BE CAREFUL : TYPO

//handle authentication - email, password
const INITIAL_STATE = { 
    email: '',
    password: '' };

export default ( state = INITIAL_STATE, action ) => { 
    //redux will compare present status and previous status -> update
    switch (action.type) { //let it watch email change
        case EMAIL_CHANGED: 
            return { ...state, email: action.payload};
            //create new object ...state
            //if state already has email- it will be overwritten by newly inserted email
            //catch what users typed-email
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        default: 
            return state;
    }
};
import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER
} from '../actions/types'; //BE CAREFUL : TYPO

//handle authentication - email, password
const INITIAL_STATE = { 
    email: '',
    password: '',
    user: null,
    error: '', 
    loading: false
};

export default ( state = INITIAL_STATE, action ) => { 
    console.log(action);

    //redux will compare present status and previous status -> update
    switch (action.type) { //let it watch email change
        case EMAIL_CHANGED: 
            return { ...state, email: action.payload };
            //create new object ...state
            //if state already has email- it will be overwritten by newly inserted email
            //catch what users typed-email
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case LOGIN_USER:
            return {...state , loading: true , error:''};
        case LOGIN_USER_SUCCESS:
            //error: '' 를 더해서 제대로된 계정 입력하면 에러메세지 사라지게 함
            return { ...state, ...INITIAL_STATE, user: action.payload };
            //email, password초기화해서 저장되지 않도록 
        case LOGIN_USER_FAIL:
            return { ...state, error: 'Authentication Failed.', password:'', loading: false };
        default: 
            return state;
    }
};
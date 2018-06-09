import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE
} from '../actions/types';

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: ''
};

export default (state = INITIAL_STATE, action ) => {
    switch (action.type){
        case EMPLOYEE_UPDATE:
            const newState = {};
            //reducer : function that returns some data
            //[action.payload.prop] 이 shift, name 등일 수 있다
            return { ...state, [action.payload.prop]: action.payload.value }
        case EMPLOYEE_CREATE:
            //to make form clean after insert data
            return INITIAL_STATE;
        default: 
           return state;
    }
};
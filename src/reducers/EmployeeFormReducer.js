import {
    EMPLOYEE_UPDATE
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
        default: 
           return state;
    }
};
import {
    EMPLOYEES_FETCH_SUCCESS
} from '../actions/types'; 

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEES_FETCH_SUCCESS:
            //console.log(action);
            //among all things in state, check out specific id
            //return {...state, [id]:action.payload };
            return action.payload;
        default:
            return state;
    }
};
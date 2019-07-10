import { LOGIN, LOGOUT } from '../actions/ActionTypes';

const initialState = {
    username: '',
    password: '',
    token: ''
}

export default ( state = initialState, { type, payload } ) => {
    switch ( type ) {

        case LOGIN:
            return {
                ...state,
                token: payload
            };
        case LOGOUT:
            return {
                ...state,
                token: ''
            };
        default:
            return state;
    }
}

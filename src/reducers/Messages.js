import { CREATE_MESSAGE } from '../actions/ActionTypes';

const initialState = {};

export default ( state = initialState, { type, payload } ) => {
    switch ( type ) {
        case CREATE_MESSAGE:
            return ( state = payload );
        default:
            return state;
    }
}

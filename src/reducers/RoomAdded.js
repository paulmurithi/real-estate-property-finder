import { ROOM_ADDED } from '../actions/ActionTypes';

const initialState = {};

export default ( state = initialState, { type, payload } ) => {
    switch ( type ) {
        case ROOM_ADDED:
            return ( state = payload );
        default:
            return state;
    }
}
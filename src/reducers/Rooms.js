import { GET_ROOMS, ADD_ROOM } from '../actions/ActionTypes';

const initialState = {
    rooms: [],
    count: null,
    prev: null,
    next: null
};

export default ( state = initialState, { type, payload } ) => {
    switch ( type ) {
        case GET_ROOMS:
            return {
                ...state,
                count: payload.count,
                prev: payload.prev,
                next: payload.next,
                rooms: payload.results
            }
        case ADD_ROOM:
            return {
                ...state,
                rooms: [ ...state.rooms ]
            }
        default:
            return state;
    }
}

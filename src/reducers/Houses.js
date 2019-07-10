import { GET_HOUSES, ADD_HOUSE } from '../actions/ActionTypes';

const initialState = {
    houses: [],
    count: null,
    prev: null,
    next: null
};

export default ( state = initialState, { type, payload } ) => {
    switch ( type ) {
        case GET_HOUSES:
            return {
                ...state,
                count: payload.count,
                prev: payload.prev,
                next: payload.next,
                houses: payload.results
            }
        case ADD_HOUSE:
            return {
                ...state,
                houses: [ ...state.houses ]
            }
        default:
            return state;
    }
}


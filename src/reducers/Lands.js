import { GET_LANDS, ADD_LAND } from '../actions/ActionTypes';

const initialState = {
    lands: [],
    count: null,
    prev: null,
    next: null
};

export default ( state = initialState, { type, payload } ) => {
    switch ( type ) {
        case GET_LANDS:
            return {
                ...state,
                count: payload.count,
                prev: payload.prev,
                next: payload.next,
                lands: payload.results
            }
        case ADD_LAND:
            return {
                ...state,
                lands: [ ...state.lands ]
            }
        default:
            return state;
    }
}

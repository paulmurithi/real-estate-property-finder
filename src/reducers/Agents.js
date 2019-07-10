import { GET_AGENTS } from '../actions/ActionTypes';

const initialState = {
    agents: [],
    next: null,
    prev: null,
    count: null
};

export default ( state = initialState, { type, payload } ) => {
    switch ( type ) {
        case GET_AGENTS:
            return {
                ...state,
                agents: [ ...payload.results ],
                count: payload.count,
                prev: payload.prev,
                next: payload.next
            }
        default:
            return state;
    }
}


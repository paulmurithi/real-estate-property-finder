import { GET_ERRORS } from '../actions/ActionTypes';

const initialState = {
    message: {},
    status: null
};

export default ( state = initialState, { type, payload } ) => {
    switch ( type ) {

        case GET_ERRORS:
            return {
                message: payload.message,
                status: payload.status
            };

        default:
            return state;
    }
}

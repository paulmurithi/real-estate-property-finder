import { CREATE_MESSAGE } from './ActionTypes';

export const createMessage = ( message ) => dispatch => (
    dispatch( {
        type: CREATE_MESSAGE,
        payload: message
    } )
)

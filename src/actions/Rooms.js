import { GET_ROOMS, ADD_ROOM, DELETE_ROOM, EDIT_ROOM} from './ActionTypes';
import { createMessage } from './Messages';
import { returnErrors } from "./Messages";
import { tokenConfig } from './auth';
import axios from 'axios';

export const getRooms = () => dispatch => {
    axios.get( 'http://127.0.0.1:8000/api/rooms/' )
        .then( res => {
            dispatch( {
                type: GET_ROOMS,
                payload: res.data
            } )
        }
        )
        .catch( err => {
            dispatch(returnErrors(err.response.data, err.response.status));
        } );
}
export const addRoom = ( room ) => ( dispatch, getState ) => {
    axios.post( 'http://127.0.0.1:8000/api/rooms/', room, tokenConfig( getState ) )
        .then( res => {
            dispatch( createMessage( { addRoom: "Room added successfully" } ) )
            dispatch( {
                type: ADD_ROOM,
                payload: res.data
            } )
        }
        )
        .catch( err => {
            dispatch(returnErrors(err.response.data, err.response.status));
        } );
}

export const deleteRoom = ( id ) => ( dispatch, getState ) => {
    axios.delete( `http://127.0.0.1:8000/api/rooms/${ id }/`, tokenConfig( getState ) )
        .then( res => {
            dispatch( createMessage( { deleteRoom: "Room added successfully" } ) )
            dispatch( {
                type: DELETE_ROOM,
                payload: res.data
            } )
        }
        )
        .catch( err => {
            dispatch(returnErrors(err.response.data, err.response.status));
        } );
}

export const editRoom = ( id ) => ( dispatch, getState ) => {
    axios.put( `http://127.0.0.1:8000/api/rooms/${ id }/`, tokenConfig( getState ) )
        .then( res => {
            dispatch( createMessage( { editRoom: "Room added successfully" } ) )
            dispatch( {
                type: EDIT_ROOM,
                payload: res.data
            } )
        }
        )
        .catch( err => {
            dispatch(returnErrors(err.response.data, err.response.status));
        } );
}

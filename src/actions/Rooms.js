import { GET_ROOMS, ADD_ROOM, DELETE_ROOM, EDIT_ROOM, GET_ERRORS } from './ActionTypes';
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
        .catch( error => {
            const errors = {
                message: error.response.data,
                status: error.response.status
            };
            dispatch( {
                type: GET_ERRORS,
                payload: errors
            } );
        } );
}
export const addRoom = ( room ) => ( dispatch, getState ) => {
    axios.post( 'http://127.0.0.1:8000/api/rooms/', room, tokenConfig( getState ) )
        .then( res => {
            dispatch( {
                type: ADD_ROOM,
                payload: res.data
            } )
        }
        )
        .catch( error => {
            const errors = {
                message: error.response.data,
                status: error.response.status
            };
            dispatch( {
                type: GET_ERRORS,
                payload: errors
            } );
        } );
}

export const deleteRoom = ( id ) => ( dispatch, getState ) => {
    axios.delete( `http://127.0.0.1:8000/api/rooms/${ id }`, tokenConfig( getState ) )
        .then( res => {
            dispatch( {
                type: DELETE_ROOM,
                payload: res.data
            } )
        }
        )
        .catch( error => {
            const errors = {
                message: error.response.data,
                status: error.response.status
            };
            dispatch( {
                type: GET_ERRORS,
                payload: errors
            } );
        } );
}

export const editRoom = ( id ) => ( dispatch, getState ) => {
    axios.put( `http://127.0.0.1:8000/api/rooms/${ id }`, tokenConfig( getState ) )
        .then( res => {
            dispatch( {
                type: EDIT_ROOM,
                payload: res.data
            } )
        }
        )
        .catch( error => {
            const errors = {
                message: error.response.data,
                status: error.response.status
            };
            dispatch( {
                type: GET_ERRORS,
                payload: errors
            } );
        } );
}

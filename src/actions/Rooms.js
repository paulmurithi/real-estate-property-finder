import { GET_ROOMS, ADD_ROOM, DELETE_ROOM, EDIT_ROOM, ROOM_ADDED} from './ActionTypes';
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
export const addRoom = ( {lodge,room_no, agent, room_type, shower, town, suburb, price} ) => ( dispatch, getState ) => {
    const body= JSON.stringify({lodge,room_no, agent, room_type, shower, town, suburb, price});
    axios.post( 'http://127.0.0.1:8000/api/rooms/', body, tokenConfig( getState ) )
        .then( res => {
            dispatch( createMessage( { addRoom: "Room added successfully", data:res.data } ) )
            dispatch( {
                type: ADD_ROOM,
                payload: res.data
            } )
            dispatch( {
                type: ROOM_ADDED,
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
            dispatch( createMessage( { deleteRoom: "Room deleted successfully" } ) )
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

export const editRoom = ( {id, lodge,room_no, agent, room_type, shower, town, suburb, price}) => ( dispatch, getState ) => {

    // request body
    const body = JSON.stringify({id, lodge,room_no, agent, room_type, shower, town, suburb, price});
    axios.put( `http://127.0.0.1:8000/api/rooms/${ id }/`, body, tokenConfig( getState ))
        .then( res => {
            dispatch( createMessage( { editRoom: "Room details edited successfully" } ) )
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

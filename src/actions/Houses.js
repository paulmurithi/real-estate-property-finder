import { GET_HOUSES, ADD_HOUSE, DELETE_HOUSE, EDIT_HOUSE } from './ActionTypes';
import { createMessage } from './Messages';
import { returnErrors } from "./Messages";
import { tokenConfig } from './auth';
import axios from 'axios';

export const getHouses = () => dispatch => {
    axios.get( 'http://127.0.0.1:8000/api/houses/' )
        .then( res => {
            dispatch( {
                type: GET_HOUSES,
                payload: res.data
            } )
        }
        )
        .catch( err => {
            dispatch(returnErrors(err.response.data, err.response.status));
        } );
}

export const addHouse = ( house ) => ( dispatch, getState ) => {
    axios.post( 'http://127.0.0.1:8000/api/houses/', house, tokenConfig( getState ) )
        .then( res => {
            dispatch( createMessage( { addHouse: "House added successfully" } ) )
            dispatch( {
                type: ADD_HOUSE,
                payload: res.data
            } )
        }
        )
        .catch( err => {
            dispatch(returnErrors(err.response.data, err.response.status));
        } );
}
export const deleteHouse = ( id ) => ( dispatch, getState ) => {
    axios.delete( `http://127.0.0.1:8000/api/houses/${ id }/`, tokenConfig( getState ) )
        .then( res => {
            dispatch( createMessage( { deleteHouse: "House removed successfully" } ) )
            dispatch( {
                type: DELETE_HOUSE,
                payload: res.data
            } )
        }
        )
        .catch( err => {
            dispatch(returnErrors(err.response.data, err.response.status));
        } );
}

export const editHouse = ( id ) => ( dispatch, getState ) => {
    axios.put( `http://127.0.0.1:8000/api/houses/${ id }/`, tokenConfig( getState ) )
        .then( res => {
            dispatch( createMessage( { editHouse: "House detail edited successfully" } ) )
            dispatch( {
                type: EDIT_HOUSE,
                payload: res.data
            } )
        }
        )
        .catch( err => {
            dispatch(returnErrors(err.response.data, err.response.status));
        } );
}

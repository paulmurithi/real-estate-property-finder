import { GET_HOUSES, ADD_HOUSE, DELETE_HOUSE, EDIT_HOUSE, GET_ERRORS } from './ActionTypes';
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

export const addHouse = ( house ) => ( dispatch, getState ) => {
    axios.post( 'http://127.0.0.1:8000/api/houses/', house, tokenConfig( getState ) )
        .then( res => {
            dispatch( {
                type: ADD_HOUSE,
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
export const deleteHouse = ( id ) => ( dispatch, getState ) => {
    axios.delete( `http://127.0.0.1:8000/api/houses/${ id }`, tokenConfig( getState ) )
        .then( res => {
            dispatch( {
                type: DELETE_HOUSE,
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

export const editHouse = ( id ) => ( dispatch, getState ) => {
    axios.put( `http://127.0.0.1:8000/api/houses/${ id }`, tokenConfig( getState ) )
        .then( res => {
            dispatch( {
                type: EDIT_HOUSE,
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

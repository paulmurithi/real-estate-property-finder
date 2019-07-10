import { ADD_LAND, DELETE_LAND, EDIT_LAND, GET_ERRORS, GET_LANDS } from './ActionTypes';
import { tokenConfig } from './auth';
import axios from 'axios';

export const getLands = () => dispatch => {
    axios.get( 'http://localhost:8000/api/lands/' )
        .then( res => {
            dispatch( {
                type: GET_LANDS,
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

export const addLand = ( land ) => ( dispatch, getState ) => {
    axios.post( 'http://localhost:8000/apilands/', land, tokenConfig( getState ) )
        .then( res => {
            dispatch( {
                type: ADD_LAND,
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

export const deleteLand = ( id ) => ( dispatch, getState ) => {
    axios.delete( `http://localhost:8000/apilands/${ id }`, tokenConfig( getState ) )
        .then( res => {
            dispatch( {
                type: DELETE_LAND,
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

export const editLand = ( id ) => ( dispatch, getState ) => {
    axios.put( `http://localhost:8000/apilands/${ id }`, tokenConfig( getState ) )
        .then( res => {
            dispatch( {
                type: EDIT_LAND,
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

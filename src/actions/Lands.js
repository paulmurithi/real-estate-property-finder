import { ADD_LAND, DELETE_LAND, EDIT_LAND, GET_LANDS } from './ActionTypes';
import { createMessage } from './Messages';
import { returnErrors } from "./Messages";
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
        .catch( err => {
            dispatch(returnErrors(err.response.data, err.response.status));
        } );
}

export const addLand = ( land ) => ( dispatch, getState ) => {
    axios.post( 'http://localhost:8000/apilands/', land, tokenConfig( getState ) )
        .then( res => {
            dispatch( createMessage( { addLand: "Land added successfully" } ) )
            dispatch( {
                type: ADD_LAND,
                payload: res.data
            } )
        }
        )
        .catch( err => {
            dispatch(returnErrors(err.response.data, err.response.status));
        } );
}

export const deleteLand = ( id ) => ( dispatch, getState ) => {
    axios.delete( `http://localhost:8000/apilands/${ id }/`, tokenConfig( getState ) )
        .then( res => {
            dispatch( createMessage( { deleteLand: "Land removed successfully" } ) )
            dispatch( {
                type: DELETE_LAND,
                payload: res.data
            } )
        }
        )
        .catch( err => {
            dispatch(returnErrors(err.response.data, err.response.status));
        } );
}

export const editLand = ( id ) => ( dispatch, getState ) => {
    axios.put( `http://localhost:8000/apilands/${ id }/`, tokenConfig( getState ) )
        .then( res => {
            dispatch( createMessage( { editLand: "Land details edited successfully" } ) )
            dispatch( {
                type: EDIT_LAND,
                payload: res.data
            } )
        }
        )
        .catch( err => {
            dispatch(returnErrors(err.response.data, err.response.status));
        } );
}

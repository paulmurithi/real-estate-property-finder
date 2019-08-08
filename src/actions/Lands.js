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

export const addLand = ( {plot_no,size,agent,verified,for_sale,for_rent,commercial,town,suburb,price} ) => ( dispatch, getState ) => {
    const body = JSON.stringify({plot_no,size,agent,verified,for_sale,for_rent,commercial,town,suburb,price});
    axios.post( 'http://localhost:8000/api/lands/', body, tokenConfig( getState )  )
        .then( res => {
            dispatch( createMessage( { addLand: "Land added successfully", data:res.data } ) )
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
    axios.delete( `http://localhost:8000/api/lands/${ id }/`, tokenConfig( getState ) )
        .then( res => {
            dispatch( createMessage( { deleteLand: "Land deleted successfully" } ) )
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

export const editLand = ( {id,plot_no,size,agent,verified,for_sale,for_rent,commercial,town,suburb,price} ) => ( dispatch, getState ) => {
    const body = JSON.stringify({id,plot_no,size,agent,verified,for_sale,for_rent,commercial,town,suburb,price});
    axios.put( `http://127.0.0.1:8000/api/lands/${ id }/`, body, tokenConfig( getState ) )
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

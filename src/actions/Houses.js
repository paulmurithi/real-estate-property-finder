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

export const addHouse = ( {house_no,bedrooms,sitting_rooms,showers,fitted_with_cctv, agent,verified,for_sale,for_rent,commercial,town,suburb,price} ) => ( dispatch, getState ) => {
    const body = JSON.stringify({house_no,bedrooms,sitting_rooms,showers,fitted_with_cctv, agent,verified,for_sale,for_rent,commercial,town,suburb,price});
    axios.post( 'http://127.0.0.1:8000/api/houses/', body, tokenConfig( getState ) )
        .then( res => {
            dispatch( createMessage( { addHouse: "House added successfully", data:res.data } ) )
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

export const editHouse = ( {id,house_no,bedrooms,sitting_rooms,showers,fitted_with_cctv, agent,verified,for_sale,for_rent,commercial,town,suburb,price} ) => ( dispatch, getState ) => {
    const body = JSON.stringify({id,house_no,bedrooms,sitting_rooms,showers,fitted_with_cctv, agent,verified,for_sale,for_rent,commercial,town,suburb,price});
    axios.put( `http://127.0.0.1:8000/api/houses/${ id }/`, body, tokenConfig( getState ) )
        .then( res => {
            dispatch( createMessage( { editHouse: "House details edited successfully" } ) )
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

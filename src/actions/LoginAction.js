import { LOGIN, GET_ERRORS } from './ActionTypes';
import axios from 'axios';

export const login = ( user ) => dispatch => {
    const config = {
        headers: { 'Content-Type': 'application/json' },
        body: user
    }
    console.log( user );
    console.log( config );
    return (
        axios.post( 'http://127.0.0.1:8000/api/login/', config )
            .then( res => { res.json() } )
            .then( token => dispatch( {
                type: LOGIN,
                payload: token
            } )
            ).catch( error => {
                const errors = {
                    meassage: error.response.data,
                    status: error.response.status
                };

                dispatch( {
                    type: GET_ERRORS,
                    payload: errors
                } );
            } )
    );
}

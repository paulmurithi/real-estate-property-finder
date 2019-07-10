import { GET_AGENTS, GET_ERRORS } from './ActionTypes';
import { tokenConfig } from './auth';
import axios from 'axios';

export const getAgents = () => ( dispatch,  ) => {
    axios.get( 'http://127.0.0.1:8000/api/agents/'  )
        .then( res => {
            dispatch( {
                type: GET_AGENTS,
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
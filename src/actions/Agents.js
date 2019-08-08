import { GET_AGENTS, } from './ActionTypes';
import axios from 'axios';
import { returnErrors } from "../actions/Messages";

export const getAgents = () => ( dispatch,  ) => {
    axios.get( 'http://127.0.0.1:8000/api/agents/'  )
        .then( res => {
            dispatch( {
                type: GET_AGENTS,
                payload: res.data
            } )
        }
        )
        .catch( err => {
            // dispatch(returnErrors(err.response.data, err.response.status));
        } );

}
import axios from 'axios';
import { returnErrors } from "./Messages";
import { USER_LOADED, USER_LOADING, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, REGISTER_FAIL, REGISTER_SUCCESS } from './ActionTypes';
import { createMessage } from './Messages';

// // check token and load user
// export const loadUser = () => ( dispatch, getState ) => {
//     dispatch( {
//         type: USER_LOADING
//     } );

//     axios.get( 'http://127.0.0.1:8000/api/user/', tokenConfig( getState ) )
//         .then( res => {
//             dispatch( {
//                 type: USER_LOADED,
//                 payload: res.data
//             } );
//         } )
//         .catch( error => {
//             const errors = {
//                 message: error.response.data,
//                 status: error.response.status
//             };
//             dispatch( {
//                 type: AUTH_ERROR
//             } );
//             dispatch( {
//                 type: GET_ERRORS,
//                 payload: errors
//             } );
//         } );
// }

// // login
// export const login = ( { username, password } ) => dispatch => {

//     const config = {
//         headers: { 'Content-Type': 'application/json' }
//     }
//     // request body
//     const body = JSON.stringify( { username, password } );

//     axios.post( 'http://127.0.0.1:8000/api/login/', body, config )
//         .then( res => {
//             dispatch( {
//                 type: LOGIN_SUCCESS,
//                 payload: res.data
//             } );
//         } )
//         .catch( error => {
//             const errors = {
//                 message: error.response.data,
//                 status: error.response.status
//             };
//             dispatch( {
//                 type: LOGIN_FAIL
//             } );
//             dispatch( {
//                 type: GET_ERRORS,
//                 payload: errors
//             } );
//         } );
// }
// export const registerUser = ( { username, email, password } ) => dispatch => {

//     const config = {
//         headers: { 'Content-Type': 'application/json' }
//     }
//     // request body
//     const body = JSON.stringify( { username, email, password } );

//     axios.post( 'http://127.0.0.1:8000/api/auth/register/', body, config )
//         .then( res => {
//             dispatch( createMessage( { acountCreated: "Account created successfuly" } ) )
//             dispatch( {
//                 type: REGISTER_SUCCESS,
//                 payload: res.data
//             } );
//         } )
//         .catch( error => {
//             const errors = {
//                 message: error.response.data,
//                 status: error.response.status
//             };
//             dispatch( {
//                 type: GET_ERRORS,
//                 payload: errors
//             } );
//             dispatch( {
//                 type: REGISTER_FAIL
//             } );
//         } );
// }

// //logout user 
// export const logout = () => ( dispatch, getState ) => {
//     axios.post( 'http://127.0.0.1:8000/api/auth/logout/', null, tokenConfig( getState ) )
//         .then( res => {
//             dispatch( createMessage( { logoutSuccess: "logged out successfully" } ) )
//             dispatch( {
//                 type: LOGOUT_SUCCESS
//             } );
//         } )
//         .catch( error => {
//             const errors = {
//                 message: error.response.data,
//                 status: error.response.status
//             };
//             dispatch( {
//                 type: GET_ERRORS,
//                 payload: errors
//             } );
//             dispatch( {
//                 type: AUTH_ERROR,
//                 payload: errors
//             } );
//         } );
// }
// export const tokenConfig = getState => {
//     const token = getState().auth.token;

//     const config = {
//         headers: { 'Content-Type': 'application/json' }
//     }
//     if ( token ) {
//         config.headers[ 'Authorization' ] = `Token ${ token }`;
//     }
//     return config;
// }


// import {
//   USER_LOADED,
//   USER_LOADING,
//   AUTH_ERROR,
//   LOGIN_SUCCESS,
//   LOGIN_FAIL,
//   LOGOUT_SUCCESS,
//   REGISTER_SUCCESS,
//   REGISTER_FAIL
// } from "./types";

// CHECK TOKEN & LOAD USER
export const loadUser = () => (dispatch, getState) => {
  // User Loading
  dispatch({ type: USER_LOADING });

  axios
    .get("http://127.0.0.1:8000/api/auth/user/", tokenConfig(getState))
    .then(res => {
      dispatch({
        type: USER_LOADED,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR
      });
    });
};

// LOGIN USER
export const login = ({username, password}) => dispatch => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  // Request Body
  const body = JSON.stringify({ username, password });

  axios
    .post("http://127.0.0.1:8000/api/auth/login/", body, config)
    .then(res => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: LOGIN_FAIL
      });
    });
};

// REGISTER USER
export const registerUser = ( { username, email, password} ) => dispatch => {

      const config = {
          headers: { 'Content-Type': 'application/json' }
      }
      // request body
      const body = JSON.stringify( { username, email, password } );
      console.log(body);
  
      axios.post( 'http://127.0.0.1:8000/api/auth/register/', body, config )
          .then( res => {
              dispatch( createMessage( { acountCreated: "Account created successfuly" } ) )
              dispatch( {
                  type: REGISTER_SUCCESS,
                  payload: res.data
              } );
          } )
          .catch( err => {
              dispatch(returnErrors(err.response.data, err.response.status));
              dispatch( {
                  type: REGISTER_FAIL
              } );
          } );
  }
  
// export const registerUser = ({ username, email, password }) => dispatch => {
//   // Headers
//   const config = {
//     headers: {
//       "Content-Type": "application/json"
//     }
//   };

//   // Request Body
//   const body = JSON.stringify({ username, email, password });

//   axios
//     .post("http://127.0.0.1:8000/api/auth/register/", body, config)
//     .then(res => {
//       dispatch({
//         type: REGISTER_SUCCESS,
//         payload: res.data
//       });
//     })
//     .catch(err => {
//       dispatch(returnErrors(err.response.data, err.response.status));
//       dispatch({
//         type: REGISTER_FAIL
//       });
//     });
// };

// LOGOUT USER
export const logout = () => (dispatch, getState) => {
  axios
    .post("http://127.0.0.1:8000/api/auth/logout/", null, tokenConfig(getState))
    .then(res => {
    //   dispatch({ type: 'CLEAR_LEADS' });
      dispatch({
        type: LOGOUT_SUCCESS
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};

// Setup config with token - helper function
export const tokenConfig = getState => {
  // Get token from state
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  // If token, add to headers config
  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }

  return config;
};

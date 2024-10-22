// import React, { Component, Fragment } from 'react';
// import { withAlert } from 'react-alert';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';

// class Alerts extends Component {

//     static propTypes = {
//         error: PropTypes.object.isRequired,
//         messages: PropTypes.object.isRequired,
//     }

//     componentDidUpdate ( prevProps ) {
//         const { error, alert, messages } = this.props;
//         if ( error != prevProps.error ) {
//             // if ( error.message.detail ) {
//             //     alert.error( `${ error.message.detail }` );
//             // }
//             if ( error.message.username ) {
//                 alert.error( `Username: ${ error.message.username }` );
//             }
//             if ( error.message.email ) {
//                 alert.error( `Email: ${ error.message.email }` );
//             }
//             if ( error.message.password ) {
//                 alert.error( `password: ${ error.message.password }` );
//             }
//             if ( error.message.non_field_errors ) {
//                 alert.error( error.message.non_field_errors.join() );
//             }
//         }
//         if ( messages != prevProps.messages ) {
//             if ( messages.acountCreated ) {
//                 alert.success( messages.acountCreated );
//             }
//         }
//     }
//     render () {
//         return (
//             <Fragment />
//         )
//     }
// }
// const mapStateToProps = ( state ) => {
//     return {
//         error: state.errors,
//         messages: state.messages
//     };
// };
// export default connect( mapStateToProps )( withAlert()( Alerts ) );

import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired
  };

  componentDidUpdate(prevProps) {
    const { error, alert, message } = this.props;
    if (error !== prevProps.error) {
        if ( error.msg.detail ) alert.error(`${error.msg.detail}`);
        if ( error.msg.username ) alert.error( `Username: ${ error.msg.username }` );
        if ( error.msg.email ) alert.error( `Email: ${ error.msg.email }` );
        if ( error.msg.password )  alert.error( `password: ${ error.msg.password }` );
        if ( error.msg.non_field_errors ) alert.error( error.msg.non_field_errors.join() );
        if (error.msg.msg) alert.error(`message: ${error.msg.msg.join()}`);

        // land errors
        if ( error.msg.plot_no )  alert.error( `plot number: ${ error.msg.plot_no }` );
        if ( error.msg.room_no )  alert.error( `room number: ${ error.msg.room_no }` );
        if ( error.msg.size )  alert.error( `size: ${ error.msg.size }` );
        if ( error.msg.town )  alert.error( `town: ${ error.msg.town }` );
        if ( error.msg.suburb )  alert.error( `suburb: ${ error.msg.suburb }` );
        if ( error.msg.agent )  alert.error( `agent: ${ error.msg.agent }` );
        if ( error.msg.price )  alert.error( `price: ${ error.msg.price }` );
        if ( error.msg.room_type )  alert.error( `room type: ${ error.msg.room_type }` );
        if ( error.msg.shower )  alert.error( `shower: ${ error.msg.shower }` );
        if ( error.msg.showers )  alert.error( `showers: ${ error.msg.showers }` );
        if ( error.msg.bedrooms )  alert.error( `bedrooms: ${ error.msg.bedrooms }` );
        if ( error.msg.sitting_rooms )  alert.error( `sitting rooms: ${ error.msg.sitting_rooms }` );
        }

        if (message !== prevProps.message) {
            if ( message.passwordNotMatch )  alert.error( `${ message.passwordNotMatch }` );

            if (message.acountCreated) alert.success(message.acountCreated);
            if (message.deleteLand) alert.success(message.deleteLand);
            if (message.editLand) alert.success(message.editLand);
            if (message.addLand) alert.success(message.addLand);

            if (message.deleteHouse) alert.success(message.deleteHouse);
            if (message.editHouse) alert.success(message.editHouse);
            if (message.addHouse) alert.success(message.addHouse);

            if (message.deleteRoom) alert.success(message.deleteRoom);
            if (message.editRoom) alert.success(message.editRoom);
            if (message.addRoom) alert.success(message.addRoom);
        //   if (message.passwordNotMatch) alert.error(message.passwordNotMatch);
        }
  }

  render() {
    return <Fragment />;
  }
}

const mapStateToProps = state => ({
  error: state.errors,
  message: state.messages
});

export default connect(mapStateToProps)( withAlert()( Alerts ) );
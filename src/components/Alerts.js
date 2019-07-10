import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Alerts extends Component {

    static propTypes = {
        error: PropTypes.object.isRequired,
        messages: PropTypes.object.isRequired,
    }

    componentDidUpdate ( prevProps ) {
        const { error, alert, messages } = this.props;
        if ( error != prevProps.error ) {
            if ( error.message.detail ) {
                alert.error( `${ error.message.detail }` );
            }
            if ( error.message.username ) {
                alert.error( `Username: ${ error.message.username }` );
            }
            if ( error.message.email ) {
                alert.error( `Email: ${ error.message.email }` );
            }
            if ( error.message.password ) {
                alert.error( `password: ${ error.message.password }` );
            }
            if ( error.message.non_field_errors ) {
                alert.error( error.message.non_field_errors.join() );
            }
        }
        if ( messages != prevProps.messages ) {
            if ( messages.acountCreated ) {
                alert.success( messages.acountCreated );
            }
        }
    }
    render () {
        return (
            <Fragment />
        )
    }
}
const mapStateToProps = ( state ) => {
    return {
        error: state.errors,
        messages: state.messages
    };
};
export default connect( mapStateToProps )( withAlert()( Alerts ) );
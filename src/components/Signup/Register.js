import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import store from '../../store/store';
import { GET_ERRORS } from '../../actions/ActionTypes';

// connect to redux
import { connect } from 'react-redux';
import { registerUser } from '../../actions/auth';


class Register extends Component {
    constructor ( props ) {
        super( props );
        this.state = {
            username: '',
            email: '',
            password: '',
            password1: ''
        }
        this.handleChange = this.handleChange.bind( this );
        this.handleSubmit = this.handleSubmit.bind( this );
    }
    handleChange ( e ) {
        this.setState( {
            [ e.target.name ]: e.target.value
        } );
    }

    handleSubmit ( e ) {
        e.preventDefault();
        const { username, email, password, password1 } = this.state;
        if ( password !== password1 ) {
            // store.dispatch( {
            //     type: GET_ERRORS,
            //     payload: "passwords do not match"
            // } );
        } else {
            const newUser = ( { username, email, password } );
            this.props.registerUser( newUser );
            this.setState( {
                username: '',
                email: '',
                password: '',
                password1: ''
            }
            );
        }
    }
    render () {
        const { isAuthenticated, username, email, password, password1 } = this.state;
        if ( isAuthenticated ) {
            return <Redirect to="/" />;
        } else {
            return (
                <div className="register">
                    <div className="row ">
                        <div className="col-sm-4 offset-4">
                            <h1>Register</h1>
                            <form className="form-horizontal" action="" method="post" encType="multipart/form-data" role="form" onSubmit={ this.handleSubmit } >
                                <div className="form-group">
                                    <label htmlFor="username">Username:</label>
                                    <input type="text"
                                        className="form-control"
                                        id="username" name="username"
                                        aria-describedby="username"
                                        onChange={ this.handleChange }
                                        placeholder="username"
                                        value={ username }
                                    // required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Emai.:</label>
                                    <input type="email"
                                        className="form-control"
                                        id="email" name="email"
                                        aria-describedby="email"
                                        onChange={ this.handleChange }
                                        placeholder="email"
                                        value={ email }
                                    // required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password:</label>
                                    <input type="password"
                                        className="form-control"
                                        id="password"
                                        placeholder="Password"
                                        name="password"
                                        onChange={ this.handleChange }
                                        value={ password }
                                    // required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password1">Confirm Password:</label>
                                    <input type="password"
                                        className="form-control"
                                        id="password1"
                                        placeholder="confirm Password"
                                        name="password1"
                                        onChange={ this.handleChange }
                                        value={ password1 }
                                    // required
                                    />
                                </div>
                                <input type="submit" value="Register" className="btn btn-primary" />
                                <span>Already have an account?</span> <Link to="/login"> Login</Link>
                            </form>
                        </div>
                    </div>
                </div>
            )
        }
    }
    static propTypes = {
        isAuthenticated: PropTypes.bool,
        registerUser: PropTypes.func.isRequired
    };
}
const mapStateToProps = ( state ) => ( {
    isAuthenticated: state.auth.isAuthenticated
} )
export default connect( mapStateToProps, { registerUser } )( Register )
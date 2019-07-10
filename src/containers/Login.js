import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import './login.css';
import avatar from '../images/avatar.png';

// connect to redux
import { connect } from 'react-redux';
import { login } from '../actions/auth';

class Login extends Component {
    constructor ( props ) {
        super( props );
        this.state = {
            username: '',
            password: '',
            errors:[]
        }
        this.handleChange = this.handleChange.bind( this );
        this.handleSubmit = this.handleSubmit.bind( this );
    }
    handleChange ( e ) {
        this.setState( {
            [ e.target.name ]: e.target.value,
        } );
    }
    handleSubmit ( e ) {
        e.preventDefault();
        const { username, password } = this.state;
        const user = ( { username, password } );
        this.props.login( user );
        this.setState( {
            username: '',
            password: ''
        }
        );
    }

    render () {
        const { username, password } = this.state;
        const { isAuthenticated } = this.props;
        return (
            <Fragment>
                { isAuthenticated ? (
                    <Redirect to="/" />
                ) : (
                        <div className="login">
                            <div className="row ">
                                <div className="col-sm-4 login-box">
                                    <img src={ avatar } className="avatar" />
                                    <h1>Login</h1>
                                    <form className="form-horizontal" action="" method="post" encType="multipart/form-data" role="form" onSubmit={ this.handleSubmit } >
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Username:</label>
                                            <input type="text"
                                                className="form-control"
                                                id="username" name="username"
                                                aria-describedby="username"
                                                onChange={ this.handleChange }
                                                placeholder="Enter username"
                                                value={ username }
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputPassword1">Password:</label>
                                            <input type="password"
                                                className="form-control"
                                                id="password"
                                                placeholder="Password"
                                                name="password"
                                                onChange={ this.handleChange }
                                                value={ password }
                                            />
                                        </div>
                                        <input type="submit" value="Login" className="btn btn-default" />
                                        <Link to="#">Forgot password</Link> <Link to="/signup">Sign up</Link>
                                    </form>
                                </div>
                            </div>
                        </div>
                    )
                }
            </Fragment>
        );
    }
    static propTypes = {
        isAuthenticated: PropTypes.bool,
        login: PropTypes.func.isRequired
    };
}

const mapStateToProps = ( state ) => ( {
    isAuthenticated: state.auth.isAuthenticated
} )

// const mapDispatchToProps = {

// }


export default connect( mapStateToProps, { login } )( Login );

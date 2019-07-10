import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { logout } from '../../actions/auth';
import User from '../../images/user.png';


const avatarStyle = {
    "width": "30px",
    "height": "30px",
    "margin": "-7px 5px 0 0",
    "-webkitBorderRadius": "50%",
    "-moz-borderRadius": "50%",
    "borderRadius": "50%"
}
class NavigationBar extends Component {
    constructor ( props ) {
        super( props );
        this.state = {
            isOpen: false
        }
        this.handleToggle = this.handleToggle.bind( this );
    }
    handleToggle () {
        this.setState( { isOpen: !this.state.isOpen } )
    }

    static propTypes = {
        auth: PropTypes.object.isRequired,
        logout: PropTypes.func.isRequired
    };

    render () {
        const { isAuthenticated, user } = this.props.auth;


        return (
            <nav className="navbar navbar-expand-lg sticky-top  navbar-inverse bg-light">
                <Link className="navbar-brand" to="/"><span className="navbar-p">P</span><span className="navbar-finder">finder</span></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse"></div>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Buy
                             </Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <Link className="dropdown-item" to="/buy_house">HOUSE</Link>
                                <Link className="dropdown-item" to="/buy_land">LAND</Link>
                                <Link className="dropdown-item" to="/">APPARTMENT</Link>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Rent
                            </Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <Link className="dropdown-item" to="/lease_house">House</Link>
                                <Link className="dropdown-item" to="/lease_land">Land</Link>
                                <Link className="dropdown-item" to="/rooms">Room</Link>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle"  to="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >Commercial</Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <Link className="dropdown-item" to="/commercial_houses">House</Link>
                                <Link className="dropdown-item" to="/commercial_lands">Land</Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/agents">Find Agent</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/list_property">List Property</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/request_property">Request Property</Link>
                        </li>
                    </ul>
                    { isAuthenticated ? (
                        <ul className="nav justify-content-end">
                            { <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" id="authOptions" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span className="navbar-text mr-3">
                                        <img src={ User } class="nav-avatar" style={ avatarStyle } />
                                        { user ? `${ user.username }` : "" }
                                    </span>
                                </Link>
                                <div className="dropdown-menu" aria-labelledby="authOptions">
                                    <Link className="dropdown-item" to="#">PROFILE</Link>
                                    <Link className="dropdown-item" to="#">CHANGE PASSWORD</Link>
                                    <Link className="dropdown-item" onClick={ this.props.logout }>LOGOUT</Link>
                                </div>
                            </li> }
                            {/* { <button className="nav-link btn btn-info btn-sm text-light" onClick={ this.props.logout }>Logout</button> } */ }
                        </ul>
                        //             <ul class="nav pull-right">
                        //                 {/* <li><a href="#">
                        //         Admin
                        // </a></li> */}
                        //                 <li class="nav-user dropdown">
                        //                     <Link to="#" class="dropdown-toggle" data-toggle="dropdown">
                        //                         <img src={ User } class="nav-avatar" style={ avatarStyle } />
                        //                         { user ? `${ user.username }` : "" }
                        //                         <b class="caret"></b>
                        //                     </Link>
                        //                     <ul class="dropdown-menu">
                        //                         <li><Link href="#">Change Password</Link></li>
                        //                         <li class="divider"></li>
                        //                         <li><Link onClick={ this.props.logout }>Logout</Link></li>
                        //                     </ul>
                        //                 </li>
                        //             </ul>
                    ) : (
                            <ul className="nav justify-content-end">
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/signup">Signup</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">Login</Link>
                                </li>
                            </ul>
                        )
                    }
                </div>
            </nav>
        )
    }
}
const mapStateToProps = ( state ) => ( {
    auth: state.auth
} );
export default connect( mapStateToProps, { logout } )( NavigationBar );

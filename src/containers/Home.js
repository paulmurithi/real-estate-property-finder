import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import House from '../components/House/House';
import Hero from '../components/Hero';
import Services from '../components/Services/Services';
import Featured from '../components/Featured';
import PropertyList from '../components/Property/PropertyList';
import Banner from '../components/Banner';

class Home extends Component {
    static propTypes = {
        isAuthenticated: PropTypes.bool
    };
    componentDidMount () {
    }
    render () {
        var { isLoading, isAuthenticated } = this.props.auth;
        if ( !isLoading ) {
            return (
                <div>
                    <Hero hero="defaultHero">
                        <Banner title="Search for property all across Kenya." subtitle="Getting real estate made easy. Search forhotel rooms, houses and land." >
                            {isAuthenticated?null:(
                                <Fragment>
                                <Link to="/signup" className="btn btn-primary mr-5">Signup</Link>
                                <Link to="/login" className="btn btn-primary">Login</Link>
                                </Fragment>
                            )}
                        </Banner>
                    </Hero>
                    <Services />
                    <Featured />
                    <PropertyList />
                </div>
            );
        } else {
            return (
                <div>
                    loading please wait.....
                </div>
            )
        }
    }
}
const mapStateToProps = state => ( {
    auth: state.auth
} )

export default connect( mapStateToProps, null )( Home );

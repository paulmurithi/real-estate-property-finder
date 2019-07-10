import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import PropTypes from 'prop-types';
import store from '../store/store';
import {connect } from 'react-redux';
import { getRooms } from '../actions/Rooms';
import Room from '../components/Room/Room';

class Rooms extends Component {
    static propTypes = {
        rooms: PropTypes.object.isRequired
    }

    constructor(props){
        super(props);
    }
    componentDidMount () {
        store.dispatch( getRooms() );
    }

    render () {
        const {rooms}  = this.props.rooms
        return (
            <Fragment>
                <Hero hero="roomsHero">
                    <Banner title="Find your escape to paradise." subtitle="Rooms available" >
                        <Link to="/" className="btn btn-primary">Return home</Link>
                    </Banner>
                </Hero>
                {rooms?(
                    <div className="row">
                        { rooms.map(
                            room => (
                                < div className="col-xs-12 col-sm-6 col-md-4 col-lg-3" >
                                    <Room Match = {this.props.match.path} details = {room}/>
                                </div>
                            )
                        ) }
                    </div>
                ):(<h1>No rooms available.</h1>)}
            </Fragment>
        )
    }
}
const mapStateToProps = state => ( {
    rooms: state.rooms
} )

// const mapDispatchToProps = state => ( {
//     getRooms: state.getRooms
// } )
export default connect( mapStateToProps, { getRooms } )( Rooms );

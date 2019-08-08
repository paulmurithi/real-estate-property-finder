import React, { Component, Fragment } from 'react';
import {Link} from  'react-router-dom';
import PropTypes from 'prop-types';
import './agents.css';

import { connect } from 'react-redux';
import store from '../../store/store';
import { getHouses } from '../../actions/Houses';
import { getLands } from '../../actions/Lands';
import { getRooms } from '../../actions/Rooms';

class Agent extends Component {
    static propTypes = {
        houses: PropTypes.object.isRequired,
    }
    componentDidMount () {
        store.dispatch( getHouses() );
        store.dispatch( getLands() );
        store.dispatch( getRooms() );
    }

    render() {
        const {logo, name} = this.props.details;

        const { houses } = this.props.houses;
        const houseBelongTo =(house)=>house.agent===name;
        const agentHouses = houses.filter(houseBelongTo).length;

        const { lands } = this.props.lands;
        const landBelongTo =(house)=>house.agent===name;
        const agentlands = lands.filter(landBelongTo).length;

        const { rooms } = this.props.rooms;
        const roomBelongTo =(room)=>room.agent===name;
        const agentrooms = rooms.filter(roomBelongTo).length;


        return (
            <Fragment>
                <div className="card mb-2">
                    <img height="200px" src={logo}/>
                    <div className="card-body content details">
                        <h5 className="card-title">{name}</h5>
                        <ul>
                            <li>Houses({agentHouses})</li>
                            <li>Land({agentlands})</li>
                            <li>Rooms({agentrooms})</li>
                        </ul>
                    </div>
                    <div className="layer">
                        {this.props.Match?<Link to={`${this.props.Match.url}/${name}`} className="btn btn-success">More Details</Link>:""}
                    </div>
                </div>
            </Fragment>
        )
    }
}
const mapStateToProps = state => ( {
    houses: state.houses,
    lands:state.Lands,
    rooms:state.rooms
} )
export default connect( mapStateToProps, { getHouses, getLands, getRooms } )( Agent );
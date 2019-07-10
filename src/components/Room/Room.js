import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './room.css';
import { Link } from 'react-router-dom';

export default class Room extends Component {
    render () {
        const {room_type, id, lodge, room_no, shower, town, suburb, agent, price} = this.props.details;
        return (
            <div className="card mb-2">
                <img src="https://images.pexels.com/photos/2346091/pexels-photo-2346091.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=1&w=500" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{room_type} room</h5>
                    <h6><FontAwesomeIcon icon = {["fas","map-marker-alt"]} className="locator"/> {town} {suburb}</h6>
                    <p className="card-text">ksh {price}</p>
                    {/* <Link to="#" className="details btn btn-primary">More</Link> */ }
                </div>
                <div className="card-overlay">
                    <Link to={`${this.props.Match}/${id}`} className="btn btn-success">Features</Link>
                </div>
            </div >
        )
    }
}

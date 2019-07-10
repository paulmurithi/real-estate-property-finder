import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './house.css';
import { Link } from 'react-router-dom';

export default class House extends Component {
    constructor(props){
        super(props);
    }
    render () {
        console.log("props", this.props);
        const {id,house_no, price, bedrooms, sitting_rooms, showers, fitted_with_cctv, agent,verified, town, suburb} =this.props.details;
        return (
            <div className="card mb-2">
                <img src="https://images.pexels.com/photos/2346091/pexels-photo-2346091.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=1&w=500" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{bedrooms} bedroom house</h5>
                    <h6><FontAwesomeIcon icon = {["fas","map-marker-alt"]} className="locator"/> {town} {suburb}</h6>
                    <p className="card-text">ksh {price}</p>
                    <ul>
                        <li><FontAwesomeIcon icon = {["fas","bed"]}/> {bedrooms}</li> 
                        <li><FontAwesomeIcon icon = {["fas","chair"]}/> {sitting_rooms}</li>
                        <li><FontAwesomeIcon icon = {["fas","shower"]}/> {showers}</li>
                         {/* {fitted_with_cctv?"fitted with cctv":""} 
                         {agent} {verified?"Verified":""} */}
                    </ul>
                </div>
                <div className="card-overlay">
                    <Link to={`${this.props.Match}/${id}`} className="btn btn-success">Features</Link>
                </div>
            </div >
        )
    }
}

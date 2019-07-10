import React, { Component } from 'react';
import './property.css';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';

export default class SingleProperty extends Component {
    render () {

        return (
            // <div className="single_property">
            //     <div className="image_container">
            //         <img src="..." />
            //         <span className="detail-btn">More</span>
            //     </div>
            //     <div className="info">
            //         <h3>5 bedroom</h3>
            //         <h4>Name</h4>
            //         <h5>Info <span>more</span></h5>
            //         <p>more information.</p>
            //     </div>
            // </div>
            <div className="card mb-2">
                <img src="https://images.pexels.com/photos/2346091/pexels-photo-2346091.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=1&w=500" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">5 bedroom house</h5>
                    <p className="card-text">ksh 30,000</p>
                    {/* <Link to="#" className="details btn btn-primary">More</Link> */ }
                </div>
                <div className="card-overlay">
                    <Link to="#" className="btn btn-success">Features</Link>
                </div>
            </div >
        )
    }
}

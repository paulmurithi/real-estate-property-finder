import React from 'react';
import Room from './Room';
// import './propertylist.css';

export default function RoomList () {
    return (
        <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <Room />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <Room />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <Room />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <Room />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <Room />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <Room />
            </div>
        </div>
    )
}
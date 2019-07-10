import React from 'react';
import House from './House';
import './house.css';

export default function HouseList () {
    return (
        <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <House />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <House />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <House />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <House />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <House />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <House />
            </div>
        </div>
    )
}
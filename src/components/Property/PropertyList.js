import React from 'react';
import SingleProperty from './SingleProperty';
import './propertylist.css';

export default function PropertyList () {
    return (
        <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <SingleProperty />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <SingleProperty />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <SingleProperty />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <SingleProperty />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <SingleProperty />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <SingleProperty />
            </div>
        </div>
    )
}

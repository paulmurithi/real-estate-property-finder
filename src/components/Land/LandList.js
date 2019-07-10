import React from 'react';
import Land from './Land';
import './land.css';

export default function LandList () {
    return (
        <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <Land />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <Land />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <Land />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <Land />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <Land />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <Land />
            </div>
        </div>
    )
}
import React, { Component, Fragment } from 'react';

export default class PropertyType extends Component {
    continue = ( e ) => {
        e.preventDefault();
        this.props.nextStep();
    }

    skip = ( e ) => {
        e.preventDefault();
        this.props.skip();
    }
    render () {
        return (
            <Fragment>
                <h1>Select Property type.</h1>
                <div class="form-check">
                    <input className="form-check-input" type="radio" name="property_type" id="room" value="room" onChange={ this.props.onChange } />
                    <label className="form-check-label" htmlFor="room">
                        Room
                     </label>
                </div>
                <div class="form-check">
                    <input className="form-check-input" type="radio" name="property_type" id="land" value="land" onChange={ this.props.onChange } />
                    <label className="form-check-label" htmlFor="land">
                        Land
                    </label>
                </div>
                <div class="form-check">
                    <input className="form-check-input" type="radio" name="property_type" id="house" value="house" onChange={ this.props.onChange } />
                    <label className="form-check-label" htmlFor="house">
                        House
                    </label>
                </div>
                <button className="btn btn-primary" onClick={ this.continue }>Next</button>
            </Fragment>
        )
    }
}


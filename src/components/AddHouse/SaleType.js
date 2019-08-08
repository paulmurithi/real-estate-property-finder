import React, { Component, Fragment } from 'react';

export default class SaleType extends Component {
    continue = ( e ) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = ( e ) => {
        e.preventDefault();
        this.props.prevStep();
    }
    render () {
        return (
            <Fragment>
                <h1>For</h1>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="sale_type" id="for_rent" value="for_rent" onChange={ this.props.onChange } />
                    <label class="form-check-label" htmlFor="for_rent">
                        Rent
                 </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="sale_type" id="for_sale" value="for_sale" onChange={ this.props.onChange } />
                    <label class="form-check-label" htmlFor="for_sale">
                        Sale
                </label>
                </div>
                <button class="btn btn-primary" onClick={ this.back }>Previous</button>
                <button class="btn btn-primary" onClick={ this.continue }>Next</button>
            </Fragment>
        )
    }
}


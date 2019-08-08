import React, { Component } from 'react';
import PropertyType from './PropertyType';
import PropertyDetails from './PropertyDetails';

export default class RequestForm extends Component {
    constructor ( props ) {
        super( props );
        this.state = {
            step: 1,
            property_type:null,
            price:null,
            town:null,
            suburb:null,
            bedrooms:null,
            sitting_rooms:null,
            showers:null,
            room_type:null,

        }
        this.handleSubmit = this.handleSubmit.bind( this );
        this.handleChange = this.handleChange.bind( this );
    }
    nextStep = () => {
        const { step } = this.state;
        this.setState( {
            step: step + 1
        } );
    }

    prevStep = () => {
        const { step } = this.state;
        this.setState( {
            step: step - 1
        } );
    }
    handleSubmit(e){
        e.preventDefault();
    }
    handleChange(e){
        e.preventDefault();
        this.setState( {
            [e.target.name]: e.target.value
        });
        console.log(this.state);
    }
    componentDidMount(){
    }
    render() {
        const { step, property_type } = this.state;
        const values = this.state;
        switch ( step ) {
            case 1:
                return (
                    <PropertyType values={values} onChange={ this.handleChange } nextStep={this.nextStep } prevStep={ this.prevStep } propertyType={ property_type } />
                );
            case 2:
                return (
                    <PropertyDetails onChange={ this.handleChange }  prevStep={ this.prevStep } values={values} />
                );
            default:
                return <h1>default case</h1>;
        }

    }
}

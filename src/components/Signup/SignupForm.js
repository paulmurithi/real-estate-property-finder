import React, { Component } from 'react';
import UserType from './UserType';
import PersonalDetails from './PersonalDetails';
import Confirm from './Confirm';
import Success from './Success';

export default class SignupForm extends Component {
    constructor ( props ) {
        super( props );
        this.state = {
            step: 1,
            type: '',
            username: '',
            password: ''
        }
    }

    // proceed to the next step
    nextStep () {
        const step = this.state;
        this.setState( {
            step: step + 1
        } );
    }

    // go back to the previous step
    previousStep () {
        const step = this.state;
        this.setState( {
            step: step - 1
        } );
    }

    handleChange = input => e => {
        this.setState( {
            [ input ]: e.target.value
        } );
    }
    render () {
        const step = this.state;
        const { type, username, password } = this.state;
        const values = { type, username, password };
        switch ( step ) {
            case 1:
                return (
                    <UserType
                        nextStep={ this.previousStep }
                        handleChange={ this.handleChange }
                        values={ values }
                    />
                )
            case 2:
                return (
                    <PersonalDetails
                        previousStep={ this.previousStep }
                        nextStep={ this.previousStep }
                        handleChange={ this.handleChange }
                        values={ values }
                    />
                )
            case 3:
                return (
                    <Confirm
                        previousStep={ this.previousStep }
                        nextStep={ this.previousStep }
                        handleChange={ this.handleChange }
                        values={ values }
                    />
                )
            case 4:
                return (
                    <Success
                        previousStep={ this.previousStep }
                        nextStep={ this.previousStep }
                        handleChange={ this.handleChange }
                        values={ values }
                    />
                )
        }
    }
}

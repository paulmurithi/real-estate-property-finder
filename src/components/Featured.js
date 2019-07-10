import React, { Component } from 'react';
import Title from '../components/Services/Title';

export default class Services extends Component {
    constructor ( props ) {
        super( props );
    }
    render () {
        return (
            <section>
                <Title title="Featured property" />
                <h3>The featured products</h3>
            </section>
        )
    }
}

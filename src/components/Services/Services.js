import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Title from './Title';

export default class Services extends Component {
    constructor ( props ) {
        super( props );
        this.state = {
            services: [
                {
                    icon: "search",
                    title: "Find property",
                    info: "Quickly find real estate properties."
                },
                {
                    icon: "database",
                    title: "Make property request",
                    info: "Make a request for the property if none meets your requirements."
                },
                {
                    icon: "home",
                    title: "Find an agent",
                    info: "Find real estate agents who Negotiate on behalf of clients."
                }
            ]
        }
    }
    render () {
        return (
            <section className="services">
                <Title title="Our Services" />
                <div className="services-center">
                    <div className="row">
                    { this.state.services.map( ( item, index ) => {
                    return <div className="col-md-4">
                                <article key={ index } className="service">
                                    <FontAwesomeIcon icon = {["fas",item.icon]} size = "4x"/>
                                    <h6>{ item.title }</h6>
                                    <p>{ item.info }</p>
                                </article>
                            </div>
                    } ) }
                </div>
                </div>
            </section>
        )
    }
}

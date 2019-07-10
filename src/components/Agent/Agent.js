import React, { Component, Fragment } from 'react';
import {Link} from  'react-router-dom';
import PropTypes from 'prop-types';
import './agents.css';

export default class Agent extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        const {logo, name} = this.props.details;

        console.log("match prop", this.props.Match);
        return (
            <Fragment>
                <div className="card mb-2">
                    <img height="200px" src={logo}/>
                    <div className="card-body content details">
                        {/* <div class="image">
                            <img src={logo}/>
                        </div> */}
                        {/* <div className="details"> */}
                            <h5 className="card-title">{name}</h5>
                            <ul>
                                <li>Houses<span class="badge badge-secondary">4</span></li>
                                <li>Land<span class="badge badge-secondary">10</span></li>
                                <li>Rooms<span class="badge badge-secondary">20</span></li>
                            </ul>
                        {/* </div> */}
                    </div>
                    <div className="layer">
                        <Link to={`${this.props.Match.url}/${name}`} className="btn btn-success">More Details</Link>
                    </div>
                </div>
            </Fragment>
        )
    }
}

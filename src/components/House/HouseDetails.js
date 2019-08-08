import React, { Component, Fragment } from 'react';
import './HouseDetails.css';

export default class HouseDetails extends Component {
    render() {
        return (
            <Fragment>
                <div className="row">
                    <div className="col-md-6">
                        <table>
                            <th colspan="2"><h4>Features</h4></th>
                            <tr>
                                <td><h6>Bedrooms </h6></td>
                                <td><h6>{this.props.details.bedrooms}</h6></td>
                            </tr>
                            <tr>
                                <td><h6>CCTV </h6></td>
                                <td><h6>{this.props.details.fitted_with_cctv?"True":"False"}</h6></td>
                            </tr>
                            <tr>
                                <td><h6>showers </h6></td>
                                <td><h6>{this.props.details.showers}</h6></td>
                            </tr>
                            <tr>
                                <td><h6>sitting rooms </h6></td>
                                <td><h6>{this.props.details.sitting_rooms}</h6></td>
                            </tr>
                        </table>
                    </div>
                    <div className="col-md-6">
                        <table>
                            <th colSpan="2"><h4>Facts</h4></th>
                            <tr>
                                <td><h6>House number </h6></td>
                                <td><h6>{this.props.details.house_no}</h6></td>
                            </tr>
                            <tr>
                                <td><h6>Town </h6></td>
                                <td>{this.props.details.town}</td>
                            </tr>
                            <tr>
                                <td><h6>Suburb </h6></td>
                                <td><h6>{this.props.details.suburb}</h6></td>
                            </tr>
                            <tr>
                                <td><h6>Verified </h6></td>
                                <td><h6>{this.props.details.verified?"True":"False"}</h6></td>
                            </tr>
                            <tr>
                                <td><h6>price </h6></td>
                                <td><h6>ksh {this.props.details.price}</h6></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </Fragment>
        )
    }
}

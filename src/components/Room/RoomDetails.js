import React, { Component, Fragment } from 'react'

export default class RoomDetails extends Component {
    render() {
        console.log("house", this.props.details);
        return (
            <Fragment>
                <div className="row">
                    <div className="col-md-12">
                        <table border="1">
                            <th colSpan="2"><h4>Facts</h4></th>
                            <tr>
                                <td><h6>Type </h6></td>
                                <td><h6>{this.props.details.room_type}</h6></td>
                            </tr>
                            <tr>
                                <td><h6>Lodge/Hotel </h6></td>
                                <td><h6>{this.props.details.lodge}</h6></td>
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
                                <td><h6>price per day </h6></td>
                                <td><h6>ksh {this.props.details.price}</h6></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </Fragment>
        )
    }
}

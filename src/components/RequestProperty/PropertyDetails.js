import React, { Component, Fragment } from 'react'

export default class PropertyDetails extends Component {
    constructor(props){
        super(props);
        this.back = this.back.bind(this);
    }
    back(){
        this.props.prevStep();
    }
    render() {
        // const { propertyType } = this.props;
        const {size, town, suburb, price, property_type} = this.props.values;
        switch ( property_type ) {
            case "land":
                return (
                    <Fragment>
                        <h1>Land</h1>
                        <form>
                            <div class="form-group">
                                <label htmlFor="size">
                                    Size:
                                </label>
                                <input type="number" value = {size} min="0" class="form-control" name="size" id="size" onChange={ this.props.onChange } />
                                <small id="agentHelpBlock" className="form-text text-muted">
                                    Enter the size in hectares i.e 0.75.
                                </small>
                            </div>
                            <div class="form-group">
                                <label htmlFor="town">
                                    Town:
                                </label>
                                <input type="text" className="form-control" name="town" id="town" value = {town} onChange={ this.props.onChange } />
                            </div>
                            <div class="form-group">
                                <label htmlFor="suburb">
                                    Suburb:
                        </label>
                                <input type="text" className="form-control" name="suburb" id="suburb" value = {suburb} onChange={ this.props.onChange } />
                            </div>
                            <div class="form-group">
                                <label htmlFor="price">
                                    Maximum price:
                        </label>
                                <input type="text" className="form-control" name="price" id="price" value = {price} onChange={ this.props.onChange } />
                            </div>
                            <button className="btn btn-primary" onClick={ this.back }>Previous</button>
                            <button className="btn btn-primary" onClick={ this.props.onSubmit }>Submit</button>
                        </form >
                    </Fragment>
                );
            case "house":
                return (
                    <Fragment>
                        <h1>House</h1>
                        <form>
                            <div class="form-group">
                                <label htmlFor="bedrooms">
                                    Bedrooms:
                                </label>
                                <input type="number" min="0" class="form-control" name="bedrooms" id="bedrooms" onChange={ this.props.onChange } />
                            </div>
                            <div class="form-group">
                                <label htmlFor="setting_rooms">
                                    Sitting Rooms:
                                </label>
                                <input type="number" min="0" class="form-control" name="setting_rooms" id="setting_rooms" onChange={ this.props.onChange } />
                            </div>
                            <div class="form-group">
                                <label htmlFor="bedrooms">
                                    Showers:
                                </label>
                                <input type="number" min="0" class="form-control" name="showers" id="showers" onChange={ this.props.onChange } />
                            </div>
                            <div class="form-group">
                                <label htmlFor="price">
                                   Maximum price:
                                </label>
                                <input type="text" className="form-control" name="price" id="price" onChange={ this.props.onChange } />
                            </div>
                            <div class="form-group">
                                <label htmlFor="town">
                                    Town:
                                </label>
                                <input type="text" className="form-control" name="town" id="town" value = {town} onChange={ this.props.onChange } />
                            </div>
                            <div class="form-group">
                                <label htmlFor="suburb">
                                    Suburb:
                                </label>
                                <input type="text" className="form-control" name="suburb" id="suburb" value = {suburb} onChange={ this.props.onChange } />
                            </div>
                            <button class="btn btn-primary" onClick={ this.back }>Previous</button>
                            <button class="btn btn-primary" onClick={ this.props.onSubmit }>Submit</button>
                        </form >
                    </Fragment>
                );
            case "room":
                return (
                    <Fragment>
                        <h1>Room</h1>
                        <form onSubmit={ this.props.onSubmit }>
                            <div class="form-group">
                                <label htmlFor="room_type">Type:</label>
                                <select className="custom-select mr-sm-2" name="room_type" id="room_type" onChange={ this.props.onChange }>
                                    <option value="">----------------------</option>
                                    <option value="Single">Single</option>
                                    <option value="Double">Double</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label htmlFor="shower">Shower:</label>
                                <select className="custom-select mr-sm-2" name="shower" id="shower" onChange={ this.props.onChange }>
                                    <option value={null}>----------------------</option>
                                    <option value={ true }>Yes</option>
                                    <option value={ false }>No</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label htmlFor="town">
                                    Town:
                                </label>
                                <input type="text" className="form-control" name="town" id="town" onChange={ this.props.onChange } />
                            </div>
                            <div class="form-group">
                                <label htmlFor="suburb">
                                    suburb:
                                </label>
                                <input type="text" className="form-control" name="suburb" id="suburb" onChange={ this.props.onChange } />
                            </div>
                            <div class="form-group">
                                <label htmlFor="price">
                                    maximum price:
                        </label>
                                <input type="text" className="form-control" name="price" id="price" onChange={ this.props.onChange } />
                            </div>
                            <button class="btn btn-primary" onClick={ this.back }>Previous</button>
                            <button class="btn btn-primary" type="submit" onClick={ this.props.onSubmit }>Submit</button>
                        </form >
                    </Fragment>
                );
            default:
                return <h1>No type selected.</h1>;
        }
    }
}

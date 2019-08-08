import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import store from '../../store/store';
import { getAgents } from '../../actions/Agents';

class PropertyDetails extends Component {
    static propTypes = {
        agents: PropTypes.object.isRequired,
    }
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.continue = this.continue.bind(this);
        this.back = this.back.bind(this);
    }
    componentDidMount () {
        store.dispatch( getAgents() );
    }

    continue = ( e ) => {
        e.preventDefault();
        this.props.nextStep();
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.onSubmit();
        // if(this.props.messages.addRoom||this.props.messages.addHouse||this.props.messages.addLand){
        //     this.continue();
        // }
    }

    back = ( e ) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render () {
        const { propertyType } = this.props;
        const { agents} = this.props.agents;
        const { addRoom} = this.props.messages;
        const { addLand} = this.props.messages;
        const { addHouse} = this.props.messages;
        const {
            house_no,
            fitted_with_cctv,
            // sale_type,
            property_type,
            verified,
            for_sale,
            for_rent,
            commercial,
            price,
            agent,
            lodge,
            size,
            town,
            suburb,
            room_no,
            plot_no,
            bedrooms,
            sitting_rooms,
            showers,
            shower,
            room_type,

        } = this.props.values;
        console.log("values", this.props.values);

        switch ( propertyType ) {
            case "land":
                return (
                    <Fragment>
                        <h1>Add land</h1>
                        <form>
                            <div class="form-group">
                                <label htmlFor="plot_no">
                                    Plot number</label>
                                <input type="text" value = {plot_no} className="form-control" name="plot_no" id="plot_no" onChange={ this.props.onChange } />
                            </div>
                                <label htmlFor="commercial">
                                <input type="radio"  name="commercial" id="commercial" onChange={ this.props.onChange } value={commercial?commercial:true}/>
                                    Commercial
                                </label>
                            <div class="form-group">
                                <label htmlFor="agent">Agent:</label>
                                <select class="custom-select mr-sm-2" id="agent" name="agent" value = {agent} aria-describedby="agentHelpBlock" onChange={ this.props.onChange }>
                                <option value="">----------------------</option>
                                    { agents.map(
                                    agent => (
                                        <option value={ agent.name }>{ agent.name }</option>
                                        )
                                    ) }
                                </select>
                                <small id="agentHelpBlock" className="form-text text-muted">
                                    Select an agent or leave blank if it's individual listing.
                        </small>
                            </div>
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
                                    price:
                        </label>
                                <input type="text" className="form-control" name="price" id="price" value = {price} onChange={ this.props.onChange } />
                            </div>
                            <button className="btn btn-primary" onClick={ this.back }>Previous</button>
                            {addLand?(<button class="btn btn-primary" type="submit" onClick={ this.continue }>Next</button>):
                            (<button class="btn btn-primary" type="submit" onClick={ this.handleSubmit }>Submit</button>)
                            }
                        </form >
                    </Fragment>
                );
            case "house":
                return (
                    <Fragment>
                        <h1>Add house</h1>
                        <form>
                            <div class="form-group">
                                <label htmlFor="house_no">
                                    Plot number</label>
                                <input type="text" class="form-control" name="house_no" id="house_no" onChange={ this.props.onChange } />
                            </div>
                            <div class="form-group">
                                <label htmlFor="agent">Agent:</label>
                                <select class="custom-select mr-sm-2" id="agent" name="agent" aria-describedby="agentHelpBlock" onChange={ this.props.onChange }>
                                    <option value="">----------------------</option>
                                    { agents.map(
                                        agent => (
                                            <option value={ agent.name }>{ agent.name }</option>
                                        )
                                    ) }
                                </select>
                                <small id="agentHelpBlock" className="form-text text-muted">
                                    Select an agent or leave blank if it's individual listing.
                        </small>
                            </div>
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
                                <label htmlFor="cctv">Is cctv installed:</label>
                                <select class="custom-select mr-sm-2" id="cctv" name="cctv" onChange={ this.props.onChange }>
                                    <option value={ false }>No</option>
                                    <option value={ true }>Yes</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label htmlFor="price">
                                    price:
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
                            {addHouse?(<button class="btn btn-primary" type="submit" onClick={ this.continue }>Next</button>):
                            (<button class="btn btn-primary" type="submit" onClick={ this.handleSubmit }>Submit</button>)
                            }
                        </form >
                    </Fragment>
                );
            case "room":
                return (
                    <Fragment>
                        <h1>Add room</h1>
                        <form onSubmit={ this.props.onSubmit }>
                            <div class="form-group">
                                <label htmlFor="lodge">
                                    Hotel</label>
                                <input type="text" className="form-control" name="lodge" id="lodge" onChange={ this.props.onChange } />
                            </div>
                            <div class="form-group">
                                <label htmlFor="room_no">
                                    Room number</label>
                                <input type="text" className="form-control" name="room_no" id="room_no" onChange={ this.props.onChange } />
                            </div>
                            <div class="form-group">
                                <label htmlFor="agent">Agent:</label>
                                <select class="custom-select mr-sm-2" id="agent" name="agent" aria-describedby="agentHelpBlock" onChange={ this.props.onChange }>
                                <option value="">----------------------</option>
                                { agents.map(
                                    agent => (
                                        <option value={ agent.name }>{ agent.name }</option>
                                    )
                                ) }
                                </select>
                                <small id="agentHelpBlock" className="form-text text-muted">
                                    Select an agent or leave blank if it's individual listing.
                        </small>
                            </div>
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
                                    price:
                        </label>
                                <input type="text" className="form-control" name="price" id="price" onChange={ this.props.onChange } />
                            </div>
                            <button class="btn btn-primary" onClick={ this.back }>Previous</button>
                            {addRoom?(<button class="btn btn-primary" type="submit" onClick={ this.continue }>Next</button>):
                            (<button class="btn btn-primary" type="submit" onClick={ this.handleSubmit }>Submit</button>)
                            }
                            
                        </form >
                    </Fragment>
                );
            default:
                return <h1>default case</h1>;
        }

    }
}
const mapStateToProps = state => ( {
    agents: state.agents,
    messages:state.messages
} )

export default connect( mapStateToProps, { getAgents } )( PropertyDetails );
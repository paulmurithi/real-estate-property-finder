import React, { Component, Fragment } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import store from '../store/store';
import {deleteHouse, editHouse} from '../actions/Houses';
import ImageSlider from '../components/ImageSlider/ImageSlider';
import { getAgents } from '../actions/Agents';
import HouseDetails from '../components/House/HouseDetails';
import './imageslider.css';
import Agent from '../components/Agent/Agent';

class SingleHouse extends Component {
    static propTypes = {
        default:PropTypes.func.isRequired,
        editRoom:PropTypes.func.isRequired
    }
    constructor(props){
        super(props);
        this.state = {
            id:null,
            house_no:null,
            bedrooms:0,
            sitting_rooms:0,
            showers:0,
            fitted_with_cctv:false,
            agent:null,
            verified:false,
            for_sale:false,
            for_rent:false,
            commercial:false,
            town:null,
            suburb:null,
            price:0,
            details:{},
            images:[]

        }
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange ( e ) {
        e.preventDefault();
        if(e.target.name=="shower"){
            if(e.target.value=="true"){
                this.setState( {
                    [ e.target.name ]: true
                } );
            }else{
                this.setState( {
                    [ e.target.name ]: false
                } );
            }
        }else{
            this.setState( {
                [ e.target.name ]: e.target.value
            } );
        }
    }
    componentDidMount(){
        store.dispatch(getAgents());
        const id  = this.props.match.params.id;
        axios.get(`http://127.0.0.1:8000/api/houses/${id}/`)
        .then(
            (res)=>{
            const {id,house_no,bedrooms,sitting_rooms,showers,fitted_with_cctv, agent,verified,for_sale,for_rent,commercial,town,suburb,price} = res.data;
            this.setState({id,house_no,bedrooms,sitting_rooms,showers,fitted_with_cctv, agent,verified,for_sale,for_rent,commercial,town,suburb,price});
            axios.get(`http://127.0.0.1:8000/api/agents/${agent}/`)
            .then(res=>{
                this.setState({
                    details:res.data
                });
            });
        });

        axios.get(`http://127.0.0.1:8000/api/house_images/`)
        .then(res=>{
            this.setState({
                ...this.state,
                images:[...res.data.results]
            });
        });
        
    }
    handleDelete(id){
        store.dispatch(deleteHouse(id));
    }
    handleEdit(){
        const {id,house_no,bedrooms,sitting_rooms,showers,fitted_with_cctv, agent,verified,for_sale,for_rent,commercial,town,suburb,price} = this.state;
        store.dispatch(editHouse({id,house_no,bedrooms,sitting_rooms,showers,fitted_with_cctv, agent,verified,for_sale,for_rent,commercial,town,suburb,price}));
    }
    render () {
        const {house_no,bedrooms,sitting_rooms,showers,fitted_with_cctv, agent,verified,for_sale,for_rent,commercial,town,suburb,price, details, images} = this.state;
        const id  = this.props.match.params.id;
        const { agents} = this.props.agents;
        const {editHouse} = this.props.messages;
        const isAuthenticated = this.props.auth.isAuthenticated;
        const user = this.props.auth.user;
        
        return (
            <Fragment>
                <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalCenterTitle">Edit house details.</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                    <form>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="sale_type" id="for_rent" value="for_rent" onChange={ this.handleChange } />
                            <label class="form-check-label" htmlFor="rent">
                                Rent
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="sale_type" id="sale" value="sale"  onChange={ this.handleChange } />
                            <label class="form-check-label" htmlFor="sale">
                                Sale
                            </label>
                        </div>
                            <div class="form-group">
                                <label htmlFor="house_no">
                                    House number</label>
                                <input type="text" class="form-control" name="house_no" id="house_no" value={house_no} onChange={ this.handleChange } />
                            </div>
                            <div class="form-group">
                                <label htmlFor="agent">Agent:</label>
                                <select class="custom-select mr-sm-2" id="agent" name="agent" value={agent} aria-describedby="agentHelpBlock" onChange={ this.handleChange }>
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
                                <input type="number" min="0" class="form-control" name="bedrooms" id="bedrooms" value={bedrooms} onChange={ this.handleChange } />
                            </div>
                            <div class="form-group">
                                <label htmlFor="sitting_rooms">
                                    Sitting Rooms:
                        </label>
                                <input type="number" min="0" class="form-control" name="sitting_rooms" id="sitting_rooms" value={sitting_rooms} onChange={ this.handleChange } />
                            </div>
                            <div class="form-group">
                                <label htmlFor="showers">
                                    Showers:
                        </label>
                                <input type="number" min="0" class="form-control" name="showers" id="showers" value={showers} onChange={ this.handleChange } />
                            </div>
                            <div class="form-group">
                                <label htmlFor="fitted_with_cctv">Is cctv installed:</label>
                                <select class="custom-select mr-sm-2" id="fitted_with_cctv" name="fitted_with_cctv" value={fitted_with_cctv} onChange={ this.handleChange }>
                                    <option value={ false }>No</option>
                                    <option value={ true }>Yes</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="town">
                                    Town:
                                </label>
                                <input type="text" className="form-control" name="town" id="town" onChange={ this.handleChange } value={town}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="suburb">
                                    suburb:
                                </label>
                                <input type="text" className="form-control" name="suburb" id="suburb" onChange={ this.handleChange } value={suburb} />
                            </div>
                        </form >
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" onClick={this.handleEdit} data-dismiss={editHouse?"modal":""}>Save changes</button>
                    </div>
                    </div>
                </div>
                </div>

                <div className="gallery">
                    <ImageSlider Images = {images} details = {this.state} houseId = {id}/>
                    <HouseDetails details = {this.state}/>
                </div>
                <div className="aside">
                    <Agent details={details}/>
                    {(isAuthenticated && user.is_staff==true)?(
                        <div className="actions">
                            <h4>Manage.</h4>
                            <button className="btn btn-danger" onClick={()=>this.handleDelete(id)}>Delete</button>
                            <button type="button" className="btn btn-warning" data-toggle="modal" data-target="#exampleModalCenter">Edit</button>
                        </div>
                    
                    ):null
                    }
                </div>
            </Fragment>
        )
    }
}
const mapStateToProps = state => ( {
    agents: state.agents,
    messages: state.messages,
    auth:state.auth
} )


export default connect( mapStateToProps, { deleteHouse, editHouse,getAgents } )( SingleHouse );
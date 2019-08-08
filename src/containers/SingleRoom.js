import React, { Component, Fragment } from 'react';
import axios from 'axios';
// import {Redirect} from 'react-router-dom';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import store from '../store/store';
import {deleteRoom, editRoom} from '../actions/Rooms';
import ImageSlider from '../components/ImageSlider/ImageSlider';
import RoomDetails from '../components/Room/RoomDetails';
import { getAgents } from '../actions/Agents';
import Agent from '../components/Agent/Agent';
import './imageslider.css';

class SingleRoom extends Component {
    static propTypes = {
        default:PropTypes.func.isRequired,
        editRoom:PropTypes.func.isRequired
    }
    constructor(props){
        super(props);
        this.state = {
            id:null,
            lodge:"",
            room_no:null,
            agent:null,
            room_type:null,
            shower:null,
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
        axios.get(`http://127.0.0.1:8000/api/rooms/${id}/`)
        .then(
            (res)=>{
            const {id, lodge,room_no, agent, room_type, shower, town, suburb,price} = res.data;
            this.setState({id, lodge,room_no, agent, room_type, shower, town, suburb,price});
            axios.get(`http://127.0.0.1:8000/api/agents/${agent}/`)
            .then(res=>{
                this.setState({
                    details:res.data
                });
            });
        });

        axios.get(`http://127.0.0.1:8000/api/room_images/`)
        .then(res=>{
            this.setState({
                ...this.state,
                images:[...res.data.results]
            });
        });
    }
    handleDelete(id){
        store.dispatch(deleteRoom(id));
    }
    handleEdit(){
        const {id, lodge,room_no, agent, room_type, shower, price, town, suburb} = this.state;
        store.dispatch(editRoom({id, lodge,room_no, agent, room_type, shower, price, town, suburb}));
    }
    render () {
        const {lodge,room_no, agent, room_type, shower, price, town, suburb, details, images} = this.state;
        const id  = this.props.match.params.id;
        const { agents} = this.props.agents;
        const roomEdited = this.props.messages;
        const isAuthenticated = this.props.auth.isAuthenticated;
        const user = this.props.auth.user;
        return (
            <Fragment>
                <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalCenterTitle">Modal title</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                    <form>
                            <div className="form-group">
                                <label htmlFor="lodge">
                                    Hotel</label>
                                <input type="text" className="form-control" name="lodge" id="lodge" onChange={ this.handleChange } value={lodge} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="room_no">
                                    Room number</label>
                                <input type="text" className="form-control" name="room_no" id="room_no" onChange={ this.handleChange } value={room_no} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="agent">Agent:</label>
                                <select class="custom-select mr-sm-2" id="agent" name="agent" aria-describedby="agentHelpBlock" onChange={ this.handleChange } value={agent}>
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
                            <div className="form-group">
                                <label htmlFor="room_type">Type:</label>
                                <select className="custom-select mr-sm-2" name="room_type" id="room_type" onChange={ this.handleChange } value={room_type}>
                                    <option value="Single">Single</option>
                                    <option value="Double">Double</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="shower">Shower:</label>
                                <select className="custom-select mr-sm-2" name="shower" id="shower" onChange={ this.handleChange } value={shower}>
                                    <option value={ true }>Yes</option>
                                    <option value={ false }>No</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="price">
                                    Price:
                                </label>
                                <input type="text" className="form-control" name="price" id="price" onChange={ this.handleChange } value={price}/>
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
                        <button type="button" className="btn btn-primary" onClick={this.handleEdit} data-dismiss={roomEdited?"modal":""}>Save changes</button>
                    </div>
                    </div>
                </div>
                </div>
                <div className="gallery">
                    <ImageSlider Images = {images} details = {this.state} roomId = {id}/>
                    <RoomDetails details = {this.state}/>
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


export default connect( mapStateToProps, { deleteRoom, editRoom,getAgents } )( SingleRoom );
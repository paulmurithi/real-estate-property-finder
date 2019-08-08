import React, { Component, Fragment } from 'react';
import axios from 'axios';
// import {Redirect} from 'react-router-dom';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import store from '../store/store';
import {deleteLand, editLand} from '../actions/Lands';
import ImageSlider from '../components/ImageSlider/ImageSlider';
import { getAgents } from '../actions/Agents';
import Agent from '../components/Agent/Agent';
import LandDetails from '../components/Land/LandDetails';
import './imageslider.css';
import { returnErrors } from "../actions/Messages";

class SingleLand extends Component {
    static propTypes = {
        agents:PropTypes.object.isRequired,
        deleteLand:PropTypes.func.isRequired,
        editLand:PropTypes.func.isRequired,
        messages:PropTypes.object,
    }
    constructor(props){
        super(props);
        this.state = {
            id:null,
            plot_no:null,
            size:0,
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
        this.setState( {
            [ e.target.name ]: e.target.value
        } );
    }
    componentDidMount(){
        store.dispatch(getAgents());
        const id  = this.props.match.params.id;
        axios.get(`http://127.0.0.1:8000/api/lands/${id}/`)
        .then(
            (res)=>{
            const {id,plot_no,size,agent,verified,for_sale,for_rent,commercial,town,suburb,price} = res.data;
            this.setState({id,plot_no,size,agent,verified,for_sale,for_rent,commercial,town,suburb,price});
            axios.get(`http://127.0.0.1:8000/api/agents/${agent}/`)
            .then(res=>{
                this.setState({
                    details:res.data
                });
            });
        })
        .catch( err => {
            console.log(err);
        } );
        axios.get(`http://127.0.0.1:8000/api/land_images/`)
        .then(res=>{
            console.log(res.data);
            this.setState({
                ...this.state,
                images:[...res.data.results]
            });
        })
        .catch( err => {
            console.log(err);
        } );
    }
    handleDelete(id){
        store.dispatch(deleteLand(id));
    }
    handleEdit(){
        const {id,plot_no,size,agent,verified,for_sale,for_rent,commercial,town,suburb,price} = this.state;
        store.dispatch(editLand({id,plot_no,size,agent,verified,for_sale,for_rent,commercial,town,suburb,price}));
    }
    render () {
        const {id,plot_no,size,agent,verified,for_sale,for_rent,commercial,town,suburb,price,details, images} = this.state;
        const { agents} = this.props.agents;
        const {editLand} = this.props.messages;
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
                            <div class="form-group">
                                <label htmlFor="plot_no">
                                    Plot number</label>
                                <input type="text" className="form-control" name="plot_no" id="plot_no" onChange={ this.handleChange } value = {plot_no}/>
                            </div>
                            <div class="form-group">
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
                            <div class="form-group">
                                <label htmlFor="size">
                                    Size:
                                </label>
                                <input type="number" min="0" class="form-control" name="size" id="size" onChange={ this.handleChange } value = {size} />
                                <small id="agentHelpBlock" className="form-text text-muted">
                                    Enter the size in hectares i.e 0.75.
                        </small>
                            </div>
                            <div class="form-group">
                                <label htmlFor="town">
                                    Town:
                                 </label>
                                <input type="text" className="form-control" name="town" id="town" onChange={ this.handleChange } value={town} />
                            </div>
                            <div class="form-group">
                                <label htmlFor="suburb">
                                    suburb:
                                 </label>
                                <input type="text" className="form-control" name="suburb" id="suburb" onChange={ this.handleChange } value={suburb} />
                            </div>
                            <div class="form-group">
                                <label htmlFor="price">
                                    price:
                                 </label>
                                <input type="text" className="form-control" name="price" id="price" onChange={ this.handleChange } value={price} />
                            </div>
                    </form >
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" onClick={this.handleEdit} data-dismiss={editLand?"modal":""}>Save changes</button>
                    </div>
                    </div>
                </div>
                </div>
                <div className="gallery">
                    <ImageSlider Images = {images} details = {this.state} landId = {id}/>
                    <LandDetails details = {this.state}/>
                </div>
                <div className="aside">
                    <Agent details={details}/>
                    {(isAuthenticated && user.is_staff==true)?(
                    <div className="actions">
                            <h4>Manage.</h4>
                            <button className="btn btn-danger" onClick={()=>this.handleDelete(id)}>Delete</button>
                            <button type="button" className="btn btn-warning" data-toggle="modal" data-target="#exampleModalCenter">Edit</button>
                    </div>):null
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


export default connect( mapStateToProps, { deleteLand, editLand,getAgents } )( SingleLand );
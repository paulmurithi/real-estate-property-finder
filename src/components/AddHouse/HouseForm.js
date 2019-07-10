import React, { Component, Fragment } from 'react';
import PropertyType from './PropertyType';
import PropTypes from 'prop-types';
import SaleType from './SaleType';
import PropertyDetails from './PropertyDetails';
import PropertyImages from './PropertyImages';
import { connect } from 'react-redux';
import { addHouse } from '../../actions/Houses';
import { addRoom } from '../../actions/Rooms';
import { addLand } from '../../actions/Lands';
import {getAgents} from '../../actions/Agents';

class HouseForm extends Component {
    static propTypes = {
        agents:PropTypes.object.isRequired
    }
    constructor ( props ) {
        super( props );
        this.state = {
            step: 1,
            property_type: "",
            hotel: '',
            shower: false,
            sale_type: "",
            agent: null,
            size: null,
            town: null,
            location: null,
            room_no: null,
            type: null,
            plot_no: null,
            bedrooms: null,
            sitting_rooms: null,
            // showers: null,
            cctv: false,
            images: null

        }
        this.handleSubmit = this.handleSubmit.bind( this );
        this.handleChange = this.handleChange.bind( this );
        this.handleFileSelect = this.handleFileSelect.bind( this );
        // this.fileListToArray = this.fileListToArray.bind(this);
    }

    componentDidMount(){
        // store.dispatch(getAgents);
    }

    nextStep = () => {
        const { step, property_type } = this.state;
        if ( step == 1 && property_type === "room" ) {
            this.setState( {
                step: step + 2
            } );
        } else {
            this.setState( {
                step: step + 1
            } );
        }
    }

    prevStep = () => {
        const { step, property_type } = this.state;
        if ( step == 3 && property_type === "room" ) {
            this.setState( {
                step: step - 2
            } );
        } else {
            this.setState( {
                step: step - 1
            } );
        }
    }

    handleFileSelect(e, images){
        // const selectesimages =  e.target.files;
        e.preventDefault();
        // const images = this.fileListToArray(selectesimages);
        this.setState({
        ...this.state,
            images:images
        })
        console.log(this.state);
        // for(var i = 0; i < files.length; i++){
        //     this.setState({
        //                 ...this.state,
        //                     images:[...file.item(i)]
        //                 })
        //     console.log( files[i].name );
        // }
        // Array.from(files).forEach((file,i) => {
        //     this.setState({
        //         ...this.state,
        //             images:[...file.item(i)]
        //         })
        // });
        // console.log( this.state );

    }

    handleChange ( e ) {
        this.setState( {
            [ e.target.name ]: e.target.value
        } );
        console.log( this.state );
    }
    handleSubmit ( e ) {
        e.preventDefault();
        const {
            sale_type,
            property_type,
            agent,
            hotel,
            size,
            town,
            suburb,
            room_no,
            type,
            plot_no,
            bedrooms,
            sitting_rooms,
            showers,
            cctv,
            images } = this.state;

        switch ( property_type ) {
            case "land":
                this.props.addLand(
                    agent,
                    size,
                    town,
                    hotel,
                    suburb,
                    room_no,
                    type,
                    plot_no,
                    bedrooms,
                    sitting_rooms,
                    showers,
                    cctv,
                    images );
            case "room":
                const {images} = this.state;
                const fd = new FormData();
                images.forEach((file, i) => {
                    fd.append(i, file)
                    });
                fd.append("image",this.state.images, this.state.images.name);
                this.props.addRoom( sale_type,
                    agent,
                    size,
                    hotel,
                    town,
                    suburb,
                    room_no,
                    type,
                    plot_no,
                    bedrooms,
                    sitting_rooms,
                    showers,
                    cctv,
                    images );
            case "house":
                this.props.addHouse( {
                    sale_type,
                    agent,
                    hotel,
                    town,
                    suburb,
                    room_no,
                    type,
                    plot_no,
                    bedrooms,
                    sitting_rooms,
                    showers,
                    cctv,
                    images
                } );
            default:
        }
    }
    render () {
        const { step, property_type } = this.state;
        switch ( step ) {
            case 1:
                return (
                    <PropertyType onChange={ this.handleChange } nextStep={ PropertyType == "room" ? this.skip : this.nextStep } prevStep={ this.prevStep } propertyType={ property_type } />
                );
            case 2:
                return (
                    <SaleType onChange={ this.handleChange } nextStep={ this.nextStep } prevStep={ this.prevStep } />
                );
            case 3:
                return (
                    <PropertyDetails onChange={ this.handleChange } propertyType={ property_type } nextStep={ this.nextStep } prevStep={ this.prevStep } onSubmit={ this.handleSubmit } />
                );
            case 4:
                return <PropertyImages onChange={ this.handleFileSelect } prevStep={ this.prevStep } onSubmit={ this.onSubmit } />;
            default:
                return <h1>default case</h1>;
        }

    }
};
// const mapStateToProps = state => ( {
//     agents: state.agents
// } )

export default connect( null, { addHouse, addLand, addRoom, getAgents } )( HouseForm );

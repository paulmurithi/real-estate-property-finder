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
            house_no:null,
            fitted_with_cctv:false,
            sale_type:null,
            property_type:null,
            verified:false,
            for_sale:false,
            for_rent:false,
            commercial:false,
            price:null,
            agent:null,
            lodge:null,
            size:null,
            town:null,
            suburb:null,
            room_no:null,
            plot_no:null,
            bedrooms:null,
            sitting_rooms:0,
            showers:null,
            shower:false,
            room_type:null,

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
        if (e.target.name==="sale_type" && e.target.value==="for_rent"){
            this.setState( {
                for_rent: true
            } );
        }else if(e.target.name==="sale_type" && e.target.value==="for_sale"){
            this.setState( {
                for_sale: true
            } );
        } else{
            this.setState( {
                [e.target.name]: e.target.value
            } );
        }
        console.log( this.state );
    }
    handleSubmit ( ) {
        // e.preventDefault();
        const {sale_type} = this.state;
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

        } = this.state;
        console.log(property_type);

        switch ( property_type ) {
            case "land":
                console.log("land reached");
                this.props.addLand({plot_no,size,agent,verified,for_sale,for_rent,commercial,town,suburb,price});
                break;
            case "room":
                    console.log("room reached");
                // const {images} = this.state;
                // const fd = new FormData();
                // images.forEach((file, i) => {
                //     fd.append(i, file)
                //     });
                // fd.append("image",this.state.images, this.state.images.name);
                this.props.addRoom( {lodge,room_no, agent, room_type, shower, town, suburb, price});
                break;
            case "house":
                    console.log("house reached");
                this.props.addHouse( {house_no,bedrooms,sitting_rooms,showers,fitted_with_cctv, agent,verified,for_sale,for_rent,commercial,town,suburb,price});
                break;
            default:
                break;
        }
    }
    render () {
        const { step, property_type } = this.state;
        const values = this.state;
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
                    <PropertyDetails values={values} onChange={ this.handleChange } propertyType={ property_type } nextStep={ this.nextStep } prevStep={ this.prevStep } onSubmit={ this.handleSubmit } />
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

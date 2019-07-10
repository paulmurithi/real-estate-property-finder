import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Fragment } from 'react';
import HouseList from '../components/House/HouseList';
import store from '../store/store';
import {connect } from 'react-redux';
import { getHouses } from '../actions/Houses';
import House from '../components/House/House';

class HousesForSale extends Component {
    static propTypes = {
        houses: PropTypes.object.isRequired,
    }

    constructor(props){
        super(props);
        this.state = {
            houses:[],
            HousesForSale:[],
        }
        this.FilterHouses = this.FilterHouses.bind(this);
    }

    FilterHouses(){
        const isForSale =(house)=>house.for_sale===true;
        const HousesForSale = this.state.houses.filter(isForSale);
        this.setState({HousesForSale:[...this.state.HousesForSale, HousesForSale]});
    }

    componentDidMount(){
        store.dispatch( getHouses() );
        // this.setState({
        //     houses:[...this.state.houses, this.props.houses]
        // });
        // this.FilterHouses();
        // console.log("mounted",this.state);
    }

    render () {
        const {houses}  = this.props.houses;
        const isForSale =(house)=>house.for_sale===true && house.commercial===false;
        const HousesForSale = houses.filter(isForSale);
        return (
            <Fragment>
                <Hero>
                    <Banner title="Houses For Sale" subtitle="Houses available for sale" >
                        <Link to="/" className="btn btn-primary">Return home</Link>
                    </Banner>
                </Hero>
                {HousesForSale?(
                    <div className="row">
                        { HousesForSale.map(
                            house => (
                                < div className="col-xs-12 col-sm-6 col-md-4 col-lg-3" >
                                    <House Match = {this.props.match.path} details = {house}/>
                                </div>
                            )
                        ) }
                    </div>
                ):(<h1>No houses for sale available.</h1>)}
            </Fragment>
        )
    }
}
const mapStateToProps = state => ( {
    houses: state.houses
} )

export default connect(mapStateToProps,{getHouses})(HousesForSale);

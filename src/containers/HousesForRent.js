import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Fragment } from 'react';
import store from '../store/store';
import {connect } from 'react-redux';
import { getHouses } from '../actions/Houses';
import House from '../components/House/House';

class HousesForRent extends Component {
    constructor(props){
        super(props);
        this.state = {
            houses:this.props.houses,
            HousesForRent:[]
        }
    }

    componentDidMount(){
        store.dispatch( getHouses() );
        this.setState({
            // HousesForRent:[...this.state.HousesForRent,this.state.houses.filter((house)=>house.for_rent===true)]
        });
    }

    static propTypes = {
        houses: PropTypes.object.isRequired,
    }

    render () {
        const { houses, count, next, prev } = this.props.houses;
        const isForSale =(house)=>house.for_rent===true && house.commercial===false;
        const HousesForRent = houses.filter(isForSale);
        return (
            <Fragment>
                    <Hero>
                        <Banner title="Rental Houses" subtitle="Vacant houses for rent," >
                            <Link to="/" className="btn btn-primary">Return home</Link>
                        </Banner>
                    </Hero>
                    <form>
                        <div className="form-row">
                            <div className="col">
                                <input type="text" className="form-control" placeholder="First name" />
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" placeholder="Last name" />
                            </div>
                            <div className="form-group col">
                                <label htmlFor="formControlRange">Example Range input</label>
                                <input type="range" className="form-control-range" id="formControlRange" />
                            </div>
                        </div>
                    </form>
                    {HousesForRent?(
                        <div className="row">
                            { HousesForRent.map(
                                house => (
                                    < div className="col-xs-12 col-sm-6 col-md-4 col-lg-3"  key={house.id}>
                                        <House Match = {this.props.match.path} details = {house} />
                                    </div>
                                )
                            ) }
                        </div>
                    ):(<h1>No rental houses available.</h1>)}
            </Fragment>
        )
    }
}

const mapStateToProps = state => ( {
    houses: state.houses
} )

export default connect(mapStateToProps,{getHouses})(HousesForRent);

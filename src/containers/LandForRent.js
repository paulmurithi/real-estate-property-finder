import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Fragment } from 'react';
import LandList from '../components/Land/LandList';

import {connect} from 'react-redux';
import store from '../store/store';
import {getLands} from '../actions/Lands';
import Land from '../components/Land/Land';


class LandForRent extends Component {
    static propTypes ={
        houses:PropTypes.object.isRequired
    }
    
    constructor(props){
        super(props);
    }

    componentDidMount(){
        store.dispatch(getLands());
    }

    render () {
        const {lands}  = this.props.lands;
        const isForRent =(land)=>land.for_rent===true && land.commercial===false;
        const LandsForRent = lands.filter(isForRent);
        return (
            <Fragment>
                <Hero>
                    <Banner title="Land" subtitle="Land available for leasing." >
                        <Link to="/" className="btn btn-primary">Return home</Link>
                    </Banner>
                </Hero>
                {LandsForRent?(
                    <div className="row">
                        { LandsForRent.map(
                            land => (
                                < div className="col-xs-12 col-sm-6 col-md-4 col-lg-3" >
                                    <Land Match = {this.props.match.path} details = {land}/>
                                </div>
                            )
                        ) }
                    </div>
                ):(<h1>No lands available.</h1>)}
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    lands:state.Lands
})


export default connect(mapStateToProps, {getLands})(LandForRent);
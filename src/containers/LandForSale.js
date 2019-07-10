import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { Fragment } from 'react';
import Banner from '../components/Banner';
import Land from '../components/Land/Land';

import {connect} from 'react-redux';
import store from '../store/store';
import {getLands} from '../actions/Lands';

class LandForSale extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        store.dispatch(getLands());
    }

    render () {
        const {lands}  = this.props.lands;
        const isForSale =(land)=>land.for_sale===true && land.commercial===false;
        const LandsForSale = lands.filter(isForSale);
        return (
            <Fragment>
                <Hero>
                    <Banner title="Land" subtitle="Land available for sale." >
                        <Link to="/" className="btn btn-primary">Return home</Link>
                    </Banner>
                </Hero>
                {LandsForSale?(
                    <div className="row">
                        { LandsForSale.map(
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


export default connect(mapStateToProps, {getLands})(LandForSale);

import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import store from '../store/store';
import {getLands } from '../actions/Lands';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Land from '../components/Land/Land';

class CommercialHouses extends Component {
    static propTypes ={
        lands:PropTypes.object.isRequired
    }

    componentDidMount(){
        store.dispatch(getLands());
    }
    render () {
        const {lands}  = this.props.lands;
        const isCommercial =(land)=>land.commercial===true;
        const commercialLands = lands.filter(isCommercial);
        return (
            <Fragment>
            <Hero>
                <Banner title="Commercial Houses" subtitle="Business houses." >
                    <Link to="/" className="btn btn-primary">Return home</Link>
                </Banner>
            </Hero>
            {commercialLands?(
                    <div className="row">
                        { commercialLands.map(
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

export default connect(mapStateToProps, {getLands})(CommercialHouses);

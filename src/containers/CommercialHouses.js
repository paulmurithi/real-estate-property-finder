import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import store from '../store/store';
import {getHouses } from '../actions/Houses';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import House from '../components/House/House';

class CommercialHouses extends Component {
    static propTypes ={
        houses:PropTypes.object.isRequired
    }

    componentDidMount(){
        store.dispatch(getHouses());
    }
    render () {
        const {houses}  = this.props.houses;
        const isCommercial =(house)=>house.commercial===true;
        const commercialHouses = houses.filter(isCommercial);
        return (
            <Fragment>
            <Hero>
                <Banner title="Commercial Houses" subtitle="Business houses." >
                    <Link to="/" className="btn btn-primary">Return home</Link>
                </Banner>
            </Hero>
            {commercialHouses?(
                <div className="row">
                    { commercialHouses.map(
                        house => (
                            < div className="col-xs-12 col-sm-6 col-md-4 col-lg-3" >
                                <House Match = {this.props.match.path} details = {house}/>
                            </div>
                        )
                    ) }
                </div>
            ):(<h1>No commercial houses available.</h1>)}
            </Fragment>
        )
    }
}
const mapStateToProps = (state) => ({
    houses:state.houses
})

export default connect(mapStateToProps, {getHouses})(CommercialHouses);

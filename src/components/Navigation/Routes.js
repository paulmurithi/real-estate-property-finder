import { Route, Switch } from 'react-router-dom';
import Home from '../../containers/Home';
import Login from '../../containers/Login';
import CommercialHouses from '../../containers/CommercialHouses';
import CommercialLand from '../../containers/CommercialLand';
import HousesForRent from '../../containers/HousesForRent';
import HousesForSale from '../../containers/HousesForSale';
import LandForRent from '../../containers/LandForRent';
import LandForSale from '../../containers/LandForSale';
import Rooms from '../../containers/Rooms';
import React, { Component } from 'react'
import Error from '../../containers/Error';
import Agents from '../../containers/Agents';
import RequestProperty from '../../containers/RequestProperty';
import ListProperty from '../../containers/ListProperty';
import PrivateRoute from './PrivateRoute';
import Register from '../Signup/Register';
import SingleHouse from '../../containers/SingleHouse';
import SingleLand from '../../containers/SingleLand';
import SingleRoom from '../../containers/SingleRoom';
import SingleAgent from '../../containers/SingleAgent';

export default class Routes extends Component {
    render () {
        return (
            <Switch>
                <Route exact path="/" component={ Home } />
                <Route exact path="/login" component={ Login } />
                <Route exact path="/signup" component={ Register } />

                <Route exact path="/commercial_houses" component={ CommercialHouses } />
                <Route exact path="/commercial_houses/:slug" component={SingleHouse} />

                <Route exact path="/commercial_lands" component={ CommercialLand } />
                <Route exact path="/commercial_lands/:slug" component={SingleLand} />

                <Route exact path="/lease_house" component={ HousesForRent } />
                <Route exact path="/lease_house/:slug" component={SingleHouse} />

                <Route exact path="/buy_house" component={ HousesForSale } />
                <Route exact path="/buy_house/:slug" component={SingleHouse} />

                <Route exact path="/lease_land" component={ LandForRent } />
                <Route exact path="/lease_land/:slug" component={SingleLand} />

                <Route exact path="/buy_land" component={ LandForSale } />
                <Route exact path="/buy_land/:slug" component={SingleLand} />

                <Route exact path="/rooms" component={ Rooms } />
                <Route exact path="/rooms/:id" component={SingleRoom} />

                <Route exact path="/agents" component={ Agents } />
                <Route exact path="/agents/:slug" component={SingleAgent} />

                <PrivateRoute exact path="/request_property" component={ RequestProperty } />
                <PrivateRoute exact path="/list_property" component={ ListProperty } />
                <Route exact component={ Error } />
            </Switch>
        )
    }
}


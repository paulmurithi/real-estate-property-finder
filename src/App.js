import React, { Component } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons'

import './app.css';
import { BrowserRouter as Router } from 'react-router-dom';
import NavigationBar from './components/Navigation/NavigationBar';
import Routes from './components/Navigation/Routes';
import ScrollTop from './components/ScrollTop/ScrollTop';
import Footer from './components/Footer/Footer';
import store from './store/store';
import { loadUser } from './actions/auth';
import { connect } from 'react-redux';


import Alerts from './components/Alerts';


 
library.add(fab,fas);

class App extends Component {

  componentDidMount () {
    store.dispatch( loadUser() );
  }

  render () {
    return (
      <div className="container-fluid">
        <Router>
          <ScrollTop>
            <NavigationBar />
            <Routes />
            <Alerts />
            <Footer />
          </ScrollTop>
        </Router>
      </div>
    );
  }
}
const mapStateToProps = ( state ) => {
  return {
    auth: state.auth
  };
};


export default connect( mapStateToProps, { loadUser } )( App );


import React, { Component, Fragment } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons'

import './app.css';
import { BrowserRouter as Router } from 'react-router-dom';
import NavigationBar from './components/Navigation/NavigationBar';
import Sidebar from './components/Navigation/Sidebar';
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
      <Fragment>
        <Router>
        <div className="container-fluid">
            <ScrollTop>
              <NavigationBar />
              {/* <Sidebar/> */}
              <Routes />
              <Alerts />
            </ScrollTop>
        </div>
        <Footer />
        </Router>
      </Fragment>
    );
  }
}
const mapStateToProps = ( state ) => {
  return {
    auth: state.auth
  };
};


export default connect( mapStateToProps, { loadUser } )( App );


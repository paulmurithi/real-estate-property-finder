import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import { Provider } from 'react-redux';
import store from './store/store';

import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

const options = {
    position: positions.TOP_CENTER,
    timeout: 5000,
    offset: '60px',
    transition: transitions.FADE
}

const Root = () => (
    <AlertProvider template={ AlertTemplate } { ...options }>
        <App />
    </AlertProvider>
)

ReactDOM.render(
    <Provider store={ store }>
        <Root />
    </Provider>,
    document.getElementById( 'root' )
);

serviceWorker.unregister();

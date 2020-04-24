import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from "react-router-dom";
import {KycContextProvider} from './context/KycContext'
import {ModalContextProvider} from "./context/ModalContext"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ToastProvider} from 'react-toast-notifications'

ReactDOM.render(
    <ToastProvider>
<KycContextProvider>
    <ModalContextProvider>
        <Router>
        <App />
        <ToastContainer />
        </Router>
    </ModalContextProvider>
</KycContextProvider>
</ToastProvider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

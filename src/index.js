import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import { Provider } from 'react-redux'
import configureStore from './configurestore'

import {BrowserRouter} from "react-router-dom";


const rootElement = document.getElementById('root');
const store = configureStore();

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
    rootElement
);



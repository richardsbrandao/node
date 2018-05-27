import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/custom.css'

import App from './containers/app'
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux'
import { configureStore } from './store/configure_store'

const initialState = {
    teams: { teams: [] },
    hello: { name: 'What\'s your name?' }
}

const store = configureStore(initialState)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();

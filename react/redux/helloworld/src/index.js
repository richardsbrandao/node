import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import HelloReducer from './reducers/hello_reducer'
import AppContainer from './app_container'
import './index.css';

console.log('from index')

let store = createStore(HelloReducer, {text: 'Initial value from store'})

ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
    document.getElementById('root')
)
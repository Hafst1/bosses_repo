import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import reducers from './reducers';
import * as serviceWorker from './serviceWorker';
import './index.css';
import { getBosses } from './actions/bossActions';

const AppWithRedux = connect(null, { getBosses })(App);

ReactDOM.render(<Provider store={ createStore(reducers, applyMiddleware(thunk)) }>
        <BrowserRouter>
            <AppWithRedux />
        </BrowserRouter>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

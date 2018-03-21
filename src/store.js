
import React from 'react';
import {applyMiddleware, compose, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {createEpicMiddleware} from 'redux-observable';
// import {browserHistory} from 'react-router';
// import {routerMiddleware} from 'react-router-redux';
import {rootEpic} from './indexEpic';
import rootReducer from './indexReducer';

const epicMiddleware = createEpicMiddleware(rootEpic);

const enhancer = compose(
    composeWithDevTools(applyMiddleware(thunk, epicMiddleware))
);
const store = createStore(rootReducer, enhancer);
// const router = routerMiddleware(browserHistory);
// const createStoreWithMiddleware = applyMiddleware(thunk, router, logger)(createStore);

// const createStoreWithMiddleware = applyMiddleware(epicMiddleware, router)(createStore);

export default store;

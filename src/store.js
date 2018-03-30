// import React from 'react';
import {applyMiddleware, compose, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {createEpicMiddleware} from 'redux-observable';
import {rootEpic} from './indexEpic';
import rootReducer from './indexReducer';

const epicMiddleware = createEpicMiddleware(rootEpic);
const enhancer = compose(composeWithDevTools(applyMiddleware(thunk, epicMiddleware)));
const store = createStore(rootReducer, enhancer);

export default store;

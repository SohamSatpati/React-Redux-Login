import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducer/indexreducers';

const Store = createStore(rootReducer, applyMiddleware(thunk));

export default Store;

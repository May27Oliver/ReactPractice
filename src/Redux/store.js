import {createStore,applyMiddleware} from 'redux';
import logger from 'redux-logger';//redux-logger可以協助debug

import rootReducer from './root-reducer';

const middleeares = [logger];

const store = createStore(rootReducer,applyMiddleware(...middlewares));
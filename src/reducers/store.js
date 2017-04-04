import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import reduxThunk from 'redux-thunk'
import createLogger from 'redux-logger'
import userReducer from '../reducers/user';
import {routerReducer, routerMiddleware} from 'react-router-redux';
import {browserHistory} from 'react-router';
import {save, load} from "redux-localstorage-simple";


const store = createStore(
    combineReducers({
        routing: routerReducer,
        userState: userReducer,
    }),
    load(),
    compose(
        applyMiddleware(routerMiddleware(browserHistory)),
        applyMiddleware(reduxThunk),
        applyMiddleware(createLogger()),
        applyMiddleware(save()),
    ),
);
export default store;

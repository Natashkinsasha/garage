import React from 'react';
import {Provider} from 'react-redux';
import Router from './Router.jsx';
import store from '../reducers/store';


const App = () => {
    return (
        <Provider store={store}>
            <Router/>
        </Provider>
    )
};

export default App;



import React from 'react';
import Home from './Home.jsx';
import NotFound from './NotFound.jsx';
import {Router, IndexRedirect, Route, browserHistory, IndexRoute} from 'react-router';
import store from '../reducers/store';
import {connect} from 'react-redux';
import {syncHistoryWithStore} from 'react-router-redux';
import Menu from './Menu.jsx';
import LogIn from './LogIn.jsx';
import Waybill from './Waybill.jsx'
import DailyTourReport from './DailyTourReport.jsx'
import Worksheet from './Worksheet.jsx'
import 'semantic-ui-css/semantic.css';
import VisibleOnlyFor from '../util/auth';
import SingUp from './SignUp.jsx';
import Worker from './Workers/Worker/Worker.jsx';
import Equipment from './Equipment/Equipment.jsx';
import Workers from './Workers/Workers.jsx';

const history = syncHistoryWithStore(browserHistory, store);

const AppRouter = ({user}) => {

    return (
        <Router history={history}>
            <Route path="/" component={Menu}>
                <IndexRoute component={Home}/>
                <Route path='/waybill' component={Waybill}/>
                <Route path='/daily_tour_report' component={DailyTourReport}/>
                <Route path='/worksheet' component={Worksheet}/>
                <Route path='/worker' component={Worker}/>
                <Route path='/equipment' component={Equipment}/>
                <Route path='/workers' component={Workers}/>
            </Route>
            <Route path="/login" components={LogIn}/>
            <Route path="/singUp" components={SingUp}/>
            <Route path="*" component={NotFound}/>
        </Router>
    )
};


export default AppRouter;

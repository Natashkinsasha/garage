import React from 'react';
import {connect} from 'react-redux';
import {Menu, Dropdown, Container, Button, Grid} from 'semantic-ui-react';
import {IndexLink, Link} from 'react-router'
import {push} from 'react-router-redux';
import {
    logout,
} from '../actions/user';

import {test} from '../api/user';


const AppMenu = (props) => {
    return (
        <Container>
            <DesktopMenu {...props}/>
        </Container>
    );
};


const DesktopMenu = ({size, ...props}) => {
    return (
        <div>
            <Menu>
                <Menu.Item header>Гараж</Menu.Item>
                <Menu.Item
                    activeClassName="active"
                    as={IndexLink}
                    name='waybill'
                    to='/waybill'
                    content='Путевой лист'
                />
                <Menu.Item
                    activeClassName="active"
                    as={IndexLink}
                    name='daily_tour_report'
                    to='/daily_tour_report'
                    content='Сменный рапорт'
                />
                <Menu.Item
                    activeClassName="active"
                    as={IndexLink}
                    name='worksheet'
                    to='/worksheet'
                    content='Рабочий лист'
                />
                <Menu.Item
                    activeClassName="active"
                    as={IndexLink}
                    name='worker'
                    to='/worker'
                    content='Создать работника'
                />
                <Menu.Item
                    activeClassName="active"
                    as={IndexLink}
                    name='equipment'
                    to='/equipment'
                    content='Создать технику'
                />
                <Menu.Item
                    activeClassName="active"
                    as={IndexLink}
                    name='workers'
                    to='/workers'
                    content='Работники'
                />
                <AuthorizationPanel isAuthorized={props.isAuthorized} onLogin={props.login}
                                    onLogout={props.logout}
                                    onSingUp={props.singUp}
                />
            </Menu>

            {props.children}


        </div>
    );
}

const AuthorizationPanel = ({isAuthorized, onLogin, onSingUp, onLogout}) => {
    if (isAuthorized) {
        return (
            <Menu.Menu position="right">
                <Menu.Item>
                    <Button onClick={onLogout}>Logout</Button>
                </Menu.Item>
            </Menu.Menu>
        );
    }
    return (
        <Menu.Menu position="right">
            <Menu.Item>
                <Button primary onClick={onSingUp}>Sign up</Button>
            </Menu.Item>
            <Menu.Item>
                <Button onClick={onLogin}>Log-in</Button>
            </Menu.Item>
        </Menu.Menu>
    );
};


export default connect(state => {
    return {
        user: state.userState.user,
        isAuthorized: state.userState.isAuthorized,
    };
}, (dispatch) => {
    return {
        login: () => {
            dispatch(push('/login'))
        },
        logout: () => {
            dispatch(logout())
        },
        singUp: () => {
            dispatch(push('/singUp'))
        },
    }
})(AppMenu)

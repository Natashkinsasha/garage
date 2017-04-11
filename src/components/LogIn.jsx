import React from 'react';
import {Checkbox, Form, Input, Select, Segment, Button, Grid, Header, Message, Divider, Icon} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {login} from '../api/user';
import {
    loginSuccess,
    loginUnsuccess
} from '../actions/user';
import SocialButton from './SocialButton';
import {push, goBack} from 'react-router-redux';


class LogIn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            login: "",
            password: "",
            formLoading: false
        }
    }

    submit = (user) => {
        this.setState({formLoading: true});
        this.props.login(user).then(() => {
            this.setState({formLoading: false});
        });
    }

    render() {
        return (
            <Grid container verticalAlign='middle' centered>
                <Grid.Row>
                    <Grid.Column mobile={12} tablet={9} computer={6}>
                        <Segment>
                            <Header as='h2' textAlign='center'>
                                Войти
                            </Header>
                            <Form loading={this.state.formLoading}>
                                <Form.Input icon='user' iconPosition='left' label='Логин' value={this.state.login}
                                            onChange={(e) => {
                                                this.setState({login: e.target.value});
                                            }}/>
                                <Form.Input icon='lock' iconPosition='left' label='Пароль' type='password'
                                            value={this.state.password} onChange={(e) => {
                                    this.setState({password: e.target.value});
                                }}/>
                                <Button fluid positive onClick={(e) => {
                                    e.preventDefault();
                                    this.submit({login: this.state.login, password: this.state.password});
                                }}>Отправить</Button>
                                <Divider fitted/>
                                <Button fluid color='orange' onClick={(e) => {
                                    e.preventDefault();
                                    this.props.goBack();
                                }}>Назад</Button>
                                <Divider/>
                                <SocialButton/>
                            </Form>
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

export default connect(null, (dispatch) => (
    {
        login: (user) => {
            return login(user).then((response) => {
                dispatch((dispatch) => {
                    dispatch(loginSuccess(response.data, response)).then(() => {
                        dispatch(push("/"));
                    })
                });
            }, (response) => {
                dispatch((dispatch) =>
                    dispatch(loginUnsuccess(response))
                );
            });
        },
        goBack: () => {
            return dispatch(goBack());
        }
    }
))(LogIn);
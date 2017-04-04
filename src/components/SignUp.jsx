import React from 'react';
import {Checkbox, Form, Input, Select, Segment, Button, Grid, Header, Message, Divider} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {singUp} from '../api/user';
import {
    singUpSuccess,
    singUpUnsuccess
} from '../actions/user';

import {push, goBack} from 'react-router-redux';


class SignUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            secondName: "",
            login: "",
            email: "",
            password: "",
            repeatPassword: "",
            formLoading: false,
        }
    }

    signUp = (user) => {
        this.setState({formLoading: true});
        this.props.signUp(user).then(() => {
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
                                Регистрация
                            </Header>
                            <Form loading={this.state.formLoading}>
                                <Form.Input icon='address book' iconPosition='left' label='Имя'
                                            value={this.state.firstName}
                                            onChange={(e) => {
                                                this.setState({firstName: e.target.value});
                                            }}/>
                                <Form.Input icon='address book outline' iconPosition='left' label='Фамилия'
                                            value={this.state.firstName}
                                            onChange={(e) => {
                                                this.setState({secondName: e.target.value});
                                            }}/>
                                <Form.Input icon='user' iconPosition='left' label='Логин' value={this.state.login}
                                            onChange={(e) => {
                                                this.setState({login: e.target.value});
                                            }}/>
                                <Form.Input icon='mail outline' iconPosition='left' label='Электронная почта'
                                            value={this.state.email}
                                            onChange={(e) => {
                                                this.setState({email: e.target.value});
                                            }}/>
                                <Form.Input icon='unlock alternate' iconPosition='left' label='Пароль' type='password'
                                            value={this.state.password} onChange={(e) => {
                                    this.setState({password: e.target.value});
                                }}/>
                                <Form.Input icon='lock' iconPosition='left' label='Повторите пароль' type='password'
                                            value={this.state.repeatPassword} onChange={(e) => {
                                    this.setState({repeatPassword: e.target.value});
                                }}/>
                                <Button fluid positive onClick={(e) => {
                                    e.preventDefault();
                                    this.signUp({login: this.state.login, password: this.state.password});
                                }}>Отправить</Button>
                                <Divider horizontal></Divider>
                                <Button fluid color='orange' onClick={(e) => {
                                    e.preventDefault();
                                    this.props.goBack();
                                }}>Назад</Button>

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
        signUp: (user) => {
            return singUp(user).then((response) => {
                dispatch((dispatch) => {
                    dispatch(singUpSuccess(response.data, response)).then(() => {
                        dispatch(push("/"));
                    })
                });
            }, (response) => {
                dispatch((dispatch) =>
                    dispatch(singUpUnsuccess(response))
                );
            });
        },
        goBack: () => {
            return dispatch(goBack());
        }
    }
))(SignUp);
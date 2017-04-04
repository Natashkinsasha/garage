import React from 'react';
import {
    Checkbox,
    Form,
    Input,
    Select,
    Segment,
    Button,
    Grid,
    Header,
    Message,
    Divider,
    Dropdown
} from 'semantic-ui-react';
import {connect} from 'react-redux';


import includes from 'lodash/includes';

import {push, goBack} from 'react-router-redux';

class WorkerInfoPanel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            secondName: "",
            telephone: "",
            positions: [],
        }
    }

    componentDidUpdate() {
        console.log(this.state)
    }

    render() {
        return (
            <Segment>
                <Header as='h2' textAlign='center'>
                    Информация о работнике
                </Header>
                <Form loading={this.state.formLoading}>
                    <Form.Input label='Имя'
                                value={this.state.firstName}
                                onChange={(e) => {
                                    this.setState({firstName: e.target.value});
                                }}/>
                    <Form.Input label='Фамилия'
                                value={this.state.secondName}
                                onChange={(e) => {
                                    this.setState({secondName: e.target.value});
                                }}/>
                    <Form.Input label='Телефон'
                                value={this.state.telephone}
                                onChange={(e) => {
                                    this.setState({telephone: e.target.value});
                                }}/>
                    <Form.Input label='Дата увольнения'
                                onChange={(e) => {
                                    onChange({dismissalData: e.target.value});
                                }}/>
                    <Button fluid color='orange' onClick={(e) => {
                        e.preventDefault();
                    }}>Редактировать</Button>
                    <Divider horizontal></Divider>
                    <Button fluid negative onClick={(e) => {
                        e.preventDefault();
                    }}>Удалить</Button>

                </Form>
            </Segment>

        );
    }
}

export default WorkerInfoPanel;

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
import difference from 'lodash/difference';
import omit from 'lodash/omit';

import CardFields from './CarFields.jsx';
import MachineFields from './MachineFields.jsx';
import MechanismFields from './MechanismFields.jsx';

import {push, goBack} from 'react-router-redux';

class Equipment extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            type: ''
        }
    }

    render() {
        return (
            <Grid container verticalAlign='middle' centered>
                <Grid.Row>
                    <Grid.Column mobile={12} tablet={9} computer={6}>
                        <Segment>
                            <Header as='h2' textAlign='center'>
                                Добавления техники
                            </Header>
                            <Form loading={this.state.formLoading}>
                                <Form.Dropdown label='Тип' selection
                                               options={this.props.types}
                                               onChange={(e, data) => {
                                                   this.setState({type: data.value})
                                               }}/>
                                <CardFields visible={includes(this.state.type, 'car')} onChange={(carFields) => {
                                    this.setState({car: {...this.state.car, ...carFields}});
                                }}/>
                                <MachineFields visible={includes(this.state.type, 'machine')} onChange={(machineFields) => {
                                    this.setState({machine: {...this.state.machine, ...machineFields}});
                                }}/>
                                <MechanismFields visible={includes(this.state.type, 'mechanism')} onChange={(carMechanism) => {
                                    this.setState({mechanism: {...this.state.mechanism, ...carMechanism}});
                                }}/>
                                <Button fluid positive onClick={(e) => {
                                    e.preventDefault();
                                }}>Отправить</Button>
                                <Divider horizontal></Divider>
                                <Button fluid color='orange' onClick={(e) => {
                                    e.preventDefault();
                                }}>Назад</Button>

                            </Form>
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

export default connect(state => {
    return {
        types: [
            {key: 'car', text: 'Автомобиль', value: 'car'},
            {key: 'machine', text: 'Строительная машина', value: 'machine'},
            {key: 'mechanism', text: 'Механизм', value: 'mechanism'},
        ]
    }
})(Equipment);


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

import * as workerApi from '../../../api/worker';
import {connect} from 'react-redux';
import PhoneMaskedInput from './PhoneMaskedInput';
import DriverFields from './DriverFields.jsx';
import RiggerFields from './RiggerFields.jsx';
import includes from 'lodash/includes';
import DismisDataPicker from './DismissDataPicker.jsx'
import {push, goBack} from 'react-router-redux';

class Worker extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            secondName: "",
            telephone: "",
            positions: [],
            formLoading: false,
        }
    }

    render() {
        return (
            <Form loading={this.state.formLoading}>
                <Form.Input label='Имя'
                            required
                            value={this.state.firstName}
                            onChange={(e) => {
                                this.setState({firstName: e.target.value});
                            }}/>
                <Form.Input label='Фамилия'
                            required
                            value={this.state.secondName}
                            onChange={(e) => {
                                this.setState({secondName: e.target.value});
                            }}/>
                <Form.Field label='Телефон' value={this.state.telephone} onChange={(e) => {
                    this.setState({telephone: e.target.value});
                }} control={PhoneMaskedInput}/>
                <Form.Field label='Дата увольнения'
                            selected={this.state.dismissalData}
                            onChange={(date) => {
                                this.setState({dismissalData: date});
                            }} control={DismisDataPicker}/>
                <Form.Dropdown label='Должности' multiple selection
                               required
                               options={this.props.positions}
                               onChange={(e, data) => {
                                   return this.setState({positions: data.value,});
                               }}/>
                <DriverFields visible={includes(this.state.positions, 'driver')}
                              onChange={(driverFields) => {
                                  this.setState({driver: {...this.state.driver, ...driverFields}});
                              }}/>
                <RiggerFields visible={includes(this.state.positions, 'rigger')}
                              onChange={(riggerFields) => {
                                  this.setState({rigger: {...this.state.rigger, ...riggerFields}});
                              }}/>
                <Button fluid positive onClick={(e) => {
                    e.preventDefault();
                    this.setState({formLoading: true}, () => {
                        this.props
                            .createWorker({
                                firstName: this.state.firstName,
                                secondName: this.state.secondName,
                                telephone: this.state.telephone,
                            })
                            .finally(() => {
                                this.setState({formLoading: false});
                            })
                    });

                }}>Отправить</Button>
                <Divider horizontal></Divider>
                <Button fluid color='orange' onClick={(e) => {
                    e.preventDefault();
                }}>Назад</Button>
            </Form>

        );
    }
}

export default connect(state => {
    return {
        positions: [{key: 'driver', text: 'Водитель', value: 'driver'},
            {key: 'machinist', text: 'Машинист', value: 'machinist'},
            {key: 'mechanic', text: 'Механник', value: 'mechanic'},
            {key: 'master', text: 'Мастер', value: 'master'},
            {key: 'rigger', text: 'Стропальщик', value: 'rigger'},
            {key: 'accountant', text: 'Бухгалтер', value: 'accountant'}
        ]
    }
}, () => {
    return {
        createWorker: (worker) => {
            return workerApi.create(worker);
        }
    }
})(Worker);



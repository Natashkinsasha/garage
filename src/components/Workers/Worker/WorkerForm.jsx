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
import DismissDataPicker from './DismissDataPicker.jsx'
import {push, goBack} from 'react-router-redux';

const WorkerForm = (props) => {
    return (
        <Form loading={props.isLoader}>
            <Form.Input label='Имя'
                        required
                        value={props.firstName}
                        onChange={(e) => {
                            props.onChange({firstName: e.target.value});
                        }}/>
            <Form.Input label='Фамилия'
                        required
                        value={props.secondName}
                        onChange={(e) => {
                            props.onChange({secondName: e.target.value});
                        }}/>
            <Form.Field label='Телефон' value={props.telephone} onChange={(e) => {
                props.onChange({telephone: e.target.value});
            }} control={PhoneMaskedInput}/>
            <Form.Field label='Дата увольнения'
                        selected={props.dismissalData}
                        onChange={(date) => {
                            props.onChange({dismissalData: date});
                        }} control={DismissDataPicker}/>
            <Form.Dropdown label='Должности' multiple selection
                           required
                           options={props.positions}
                           onChange={(e, data) => {
                               return props.onChange({positions: data.value,});
                           }}/>
            <DriverFields visible={includes(props.positions, 'driver')}
                          onChange={(driverFields) => {
                              props.onChange({driver: {...props.driver, ...driverFields}});
                          }}/>
            <RiggerFields visible={includes(props.positions, 'rigger')}
                          onChange={(riggerFields) => {
                              props.onChange({rigger: {...props.rigger, ...riggerFields}});
                          }}/>
        </Form>
    )
}


export default WorkerForm;

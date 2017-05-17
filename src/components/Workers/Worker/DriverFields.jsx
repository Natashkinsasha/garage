import React from 'react';
import {Checkbox, Form, Input, Select, Segment, Button, Grid, Header, Message, Divider} from 'semantic-ui-react';

const DriverFields = ({onChange, visible}) => {

    if (visible) {
        return (
            <div>
                <Form.Input label='Табельный номер водителя'
                            onChange={(e) => {
                                onChange({personnelNumber: e.target.value});
                            }}/>
                <Form.Input label='Номер водительского удостоверения'
                            onChange={(e) => {
                                onChange({licenseNumber: e.target.value})
                            }}/>
                <Form.Input label='Класс'
                            onChange={(e) => {
                                onChange({class: e.target.value});
                            }}/>
            </div>
        );
    }
    return (<div></div>)
};


export default DriverFields;

import React from 'react';
import {Checkbox, Form, Input, Select, Segment, Button, Grid, Header, Message, Divider} from 'semantic-ui-react';

const MachineFields = ({onChange, visible}) => {

    if (visible) {
        return (
            <div>
                <Form.Input label='Марка'
                            onChange={(e) => {
                                onChange({mark: e.target.value});
                            }}/>
                <Form.Input label='Наименование'
                            onChange={(e) => {
                                onChange({name: e.target.value})
                            }}/>
            </div>
        );
    }
    return (<div></div>)
};


export default MachineFields;

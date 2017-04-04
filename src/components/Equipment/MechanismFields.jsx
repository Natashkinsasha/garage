import React from 'react';
import {Checkbox, Form, Input, Select, Segment, Button, Grid, Header, Message, Divider} from 'semantic-ui-react';

const MechanismFields = ({onChange, visible}) => {

    if (visible) {
        return (
            <div>
                <Form.Input label='Наименование'
                            onChange={(e) => {
                                onChange({name: e.target.value})
                            }}/>
            </div>
        );
    }
    return (<div></div>)
};


export default MechanismFields;

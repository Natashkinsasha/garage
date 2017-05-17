import React from 'react';
import {Checkbox, Form, Input, Select, Segment, Button, Grid, Header, Message, Divider} from 'semantic-ui-react';

const RiggerFields = ({onChange, visible}) => {

    if (visible) {
        return (

            <Form.Input label='Номер удаставерения'
                        onChange={(e) => {
                            onChange({сardNumber: e.target.value});
                        }}/>
        );
    }
    return (<div></div>)
};


export default RiggerFields;

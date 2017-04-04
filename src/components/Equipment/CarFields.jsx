import React from 'react';
import {Checkbox, Form, Input, Select, Segment, Button, Grid, Header, Message, Divider} from 'semantic-ui-react';

const CarFields = ({onChange, visible}) => {

    if (visible) {
        return (
            <div>
                <Form.Input label='Марка'
                            onChange={(e) => {
                                onChange({mark: e.target.value});
                            }}/>
                <Form.Input label='Регестрационный знак'
                            onChange={(e) => {
                                onChange({registerSign: e.target.value})
                            }}/>
                <Form.Input label='Гаражный номер'
                            onChange={(e) => {
                                onChange({garageNumber: e.target.value});
                            }}/>
                <Form.Input label='Код марки'
                            onChange={(e) => {
                                onChange({codeMark: e.target.value});
                            }}/>
            </div>
        );
    }
    return (<div></div>)
};


export default CarFields;

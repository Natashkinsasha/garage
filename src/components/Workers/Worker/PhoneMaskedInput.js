import React from 'react';
import MaskedInput from 'react-text-mask';

const PhoneMaskedInput = (props) => {
    const phoneNumberMask = ['+', '3', '7', '5', ' ', '(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];
    return (
        <MaskedInput {...props} mask={phoneNumberMask} guide={true} placeholder="+375 (__) ___-__-__"/>
    );
};

export default PhoneMaskedInput;

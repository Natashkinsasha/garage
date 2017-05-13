import React from 'react';
import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask'

const PaginationMaskInput = (props) => {
    const mask = createNumberMask({
        prefix: '',
        integerLimit: 2,
        includeThousandsSeparator: false,
    });
    return (
        <MaskedInput {...props} mask={mask} guide={true}/>
    );
};

export default PaginationMaskInput;

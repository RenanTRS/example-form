import React, {useState} from 'react';
import InputMask from 'react-input-mask';

import { Label } from './Label';
import { Content } from './Content';
import { Input, InputM } from './Input';
import { Error } from './Error';

import { validation } from './Input/services/validation';

const Text = ({label, type, name, register, error}) => {
    return (
        <Label>
            <Content>{label}</Content>
            <Input type={type} {...register} />
            {error && <Error>{error}</Error>}
        </Label>
    );
}

const Cpf = ({label, register, error}) => {
    const [message, setMessage] = useState('');

    function handleValidation(event){
        setMessage(validation(event));
    }

    return (
        <Label>
            <Content>{label}</Content>
            <InputM>
                <InputMask mask="999.999.999-99" {...register} onInvalid={handleValidation} onBlur={handleValidation} />
            </InputM>
            {message && <Error>{message}</Error>}
            {error && <Error>{error}</Error>}
        </Label>
    );
}

export const Field = {
    Text,
    Cpf
}
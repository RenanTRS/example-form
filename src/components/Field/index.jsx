import React from 'react';

import { Label } from './Label';
import { Content } from './Content';
import { Input } from './Input';
import { Error } from './Error';

const Text = ({label, type, name, register, error}) => {
    return (
        <Label>
            <Content>{label}</Content>
            <Input type={type} {...register} />
            {error && <Error>{error}</Error>}
        </Label>
    );
}

export const Field = {
    Text
}
import React from 'react';
import { Content } from './Content';
import { Input } from './Input';
import { Label } from './Label';

const Text = ({label, type, name}) => {
    return (
        <Label>
            <Content>{label}</Content>
            <Input type={type} name={name}/>
        </Label>
    );
}

export const Field = {
    Text
}
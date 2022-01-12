import React from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'

import { useForm } from 'react-hook-form';

import { Form } from '../Form';
import { Field } from '../Field';
import { Button } from '../Button';

export const FormNew = () => {
    const schema = yup.object({
        name: yup.string().min(2, 'Mínimo dois caracteres').required('Digite um nome'),
        email: yup.string().email('Digite um email válido').required('Digite um email'),
        cpf: yup.string().required('Digite um cpf')
    }).required();
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
      });

    const newUser = (user) => {
        console.log(user);
    }
    async function teste(event){
        //event.preventDefault()
        let formData = {
            name: event.target[0].value,
            email: event.target[1].value,
            cpf: event.target[2].value.replace(/\D/g, '')
        }
        const isValid = await schema.isValid(formData)
        if(isValid){
            console.log(formData);
            handleSubmit(formData);
        }
    }

    return(
        <>
            {/*<Form onSubmit={handleSubmit(newUser)}>*/}
            <Form onSubmit={teste}>
                <Field.Text label="Nome" type="text" register={register("name")} error={errors.name?.message}/>
                <Field.Text label="Email" type="email" register={register("email")} error={errors.email?.message} />
                <Field.Cpf label="CPF" register={register("cpf")} error={errors.cpf?.message}/>

                <Button>Enviar</Button>
            </Form>
        </>
    );
}
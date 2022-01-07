import * as yup from 'yup';
export const schema = yup.object({
    name: yup.string().min(2, 'Mínimo dois caracteres').required('Digite um nome'),
    email: yup.string().email('Digite um email válido').required('Digite um email')
});
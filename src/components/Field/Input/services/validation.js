import {ValidateCPF} from './ValidateCPF'
import {message} from './messages'

export function validation(event){
    event.preventDefault();
    const field = event.target;

    function verifyError(){
        let foundError = false;

        ValidateCPF(field);

        for(let error in field.validity){
            if(field.validity[error] && !field.validity.valid){
                foundError = error;
            }
        }
        
        return foundError;
    }
    const error = verifyError();
    if (error) {
        return message[error];
    } else {
        return "";
    }
}
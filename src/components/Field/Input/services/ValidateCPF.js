export function ValidateCPF(field){
    let message = '';
    const numCpf = field.value.replace(/\D/g, '');

    if(repeat(numCpf) || !validate(numCpf)){
        message = 'invalid'
    }

    return field.setCustomValidity(message);
}

function repeat(value){
    let error = false;
    const numbers = [
        "00000000000",
        "11111111111",
        "22222222222",
        "33333333333",
        "44444444444",
        "55555555555",
        "66666666666",
        "77777777777",
        "88888888888",
        "99999999999",
    ];
    numbers.forEach(number => {
        if(number === value){
            error = true;
        }
    });

    return error;
}

function validate(numCpf){
    const mult = 10;
    if(verifyError(numCpf, mult) && verifyError(numCpf, mult + 1)){
        return true;
    } else {
        return false;
    }
}

function verifyError(numCpf, mult){
    let initialMult = mult;
    const number = numCpf.substr(0, mult - 1).split('');
    const verifyer = numCpf.charAt(mult - 1);
    
    let sum = 0;
    
    for(let count = 0; initialMult > 1; initialMult--){
        sum += number[count] * initialMult;
        count++;
    }
    
    if(verifyer == checkNumber(sum)){
        return true
    } 
    
    return false;
}

function checkNumber(sum){
    let number = 11 - (sum % 11);
    
    if(number >= 10){
        number = 0;
    }

    return number
}
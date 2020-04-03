const Validate = (value, rules) => {
    let isValid = true;

    for(let rule in rules){
        switch(rule){
            case 'minWords': isValid = isValid && minWordsValidator(value , rules[rule]); break;
            case 'required': isValid = isValid && isRequired(value); break;
            
            default: isValid = true;                
        }
    };

    return isValid;
}

const minWordsValidator = (value, minWordsNumber) => {
    return value.split(' ').length >= minWordsNumber;
}

const isRequired = (value) =>{
    if(typeof(value) === 'boolean')
        return value;
        
    return value.trim() !== '';
}

export default Validate;
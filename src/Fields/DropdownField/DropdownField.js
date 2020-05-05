import React from 'react';

const DropdownField = (props) =>{   
    let isValid = !props.touched || props.valid;

    let selectClass = isValid ? "field-input" : "field-input invalid";
    let errorMessageClass = isValid ? "d-none" : "text-danger";
    
    let helperTextClass = props.value === "" ? "helper-text invisible": "helper-text";
    if (props.selected){
        helperTextClass += " blue-text";
    }

    let placeholder = <option key={0} value="" disabled>{props.label}</option>
    const options = props.selectOptions.map((option, step) => (
        <option key={step+1} value={option.value}>
            {option.display}
        </option>
    ))

    options.unshift(placeholder)

    return(
        <div>
            <div className={helperTextClass}>
                <font>
                    {props.label}
                </font>
            </div>
            <select className={selectClass} {...props}>
                {options}
            </select>
            <span className={errorMessageClass}>Field can't be empty!</span>
        </div>
    )
}
export default DropdownField
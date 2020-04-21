import React from 'react';

const DropdownField = (props) =>{   
    let isValid = !props.touched || props.valid;

    let selectClass = isValid ? "w-100" : "w-100 invalid";
    let errorMessageClass = isValid ? "d-none" : "text-danger";

    return(
        <div className="w-100">
            <label>{props.label}</label>
            <select className={selectClass} {...props}>
                {props.selectOptions.map((option, step) => (
                    <option key={step+1} value={option.value} disabled={step === 0}>
                        {option.display}
                    </option>
                ))}
            </select>
            <span className={errorMessageClass}>Field can't be empty!</span>
        </div>
    )
}
export default DropdownField
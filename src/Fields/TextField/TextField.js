import React from 'react';


const TextField = (props) => {
    let isValid = !props.touched || props.valid;

    let inputClass = isValid ? "w-100" : "w-100 invalid";
    let errorMessageClass = isValid ? "d-none" : "text-danger";
    return (
        <div>
            <label>{props.label}</label>
            <input type="text" className={inputClass} name={props.name} value={props.value}
                placeholder={props.label} {...props}>
            </input>
            <span className={errorMessageClass}>Field can't be empty!</span>
        </div>
    )
}
export default TextField
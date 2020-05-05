import React from 'react';


const TextField = (props) => {
    let isValid = !props.touched || props.valid;

    let inputClass = isValid ? "field-input" : "field-input invalid";
    let errorMessageClass = isValid ? "d-none" : "text-danger";

    let helperTextClass = props.value === "" ? "helper-text invisible": "helper-text";
    if (props.selected){
        helperTextClass += " blue-text";
    }
    return (
        <div>
            <div className={helperTextClass}>
                <font>
                    {props.label}
                </font>
            </div>
            <input type="text" className={inputClass} name={props.name} value={props.value}
                placeholder={props.label} {...props}>
            </input>
            <span className={errorMessageClass}>Field can't be empty!</span>
        </div>
    )
}
export default TextField
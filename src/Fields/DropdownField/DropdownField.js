import React from 'react';

const DropdownField = (props) =>{
    const options = props.selectOptions.map((value, step) =>{
        return(<option key={step+1}>{value}</option>)
    })
    
    let placeholder = <option key={0} selected disabled>{props.placeholder}</option>
    //Add placeholder as first option
    options.unshift(placeholder)

    let isValid = !props.touched || props.valid;

    let selectClass = isValid ? "w-100" : "w-100 invalid";
    let errorMessageClass = isValid ? "d-none" : "text-danger";

    return(
        <div className="input_container w-100">
            <label>{props.label}</label>
            <select className={selectClass} name={props.name} onChange={props.onChange} onBlur={props.onBlur} value={props.value}>
                {options}
            </select>
            <span className={errorMessageClass}>Field can't be empty!</span>
        </div>
    )
}
export default DropdownField
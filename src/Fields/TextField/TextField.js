import React, { Component } from 'react';


const TextField = (props) =>{
    let isValid = !props.touched || props.valid;

    let inputClass = isValid ? "w-100" : "w-100 invalid";
    let errorMessageClass = isValid ? "d-none" : "text-danger";
    return(
        <div className="input_container">
                <label>{props.label}</label>
                <input type="text" className={inputClass} name={props.name} value={props.value} 
                    placeholder={props.label} onChange={props.onChange} onBlur={props.onBlur}>
                </input>
                <span className={errorMessageClass}>Field can't be empty!</span>
            </div>
    )
}
export default TextField
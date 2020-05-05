import React from 'react'

const CheckboxField = (props) =>{
    let isValid = !props.touched || props.valid;

    let inputClass = isValid ? "form-check-input" : "form-check-input invalid";
    let errorMessageClass = isValid ? "d-none" : "text-danger";


    return (
        <div className="form-check">
            <label className="form-check-label">
                <input type="checkbox" className={inputClass} name={props.name} 
                    onChange={props.onChange} onBlur={props.onBlur} value={props.value} checked={props.value}/>
                {props.label}
            </label>
            <span className={errorMessageClass}>Checkbox is required!</span>
        </div>
    )
}

export default CheckboxField
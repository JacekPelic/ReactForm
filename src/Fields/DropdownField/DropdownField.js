import React from 'react';

const DropdownField = (props) =>{
    const options = props.selectOptions.map((value, step) =>{
        return(<option key={step+1}>{value}</option>)
    })
    
    let placeholder = <option key={0} selected disabled>{props.placeholder}</option>
    //Add placeholder as first option
    options.unshift(placeholder)

    return(
        <div className="input_container w-100">
            <label>{props.label}</label>
            <select className="w-100" name={props.name} onChange={props.onChange} value={props.value}>
                {options}
            </select>
            <span className="d-none">Field can't be empty!</span>
        </div>
    )
}
export default DropdownField
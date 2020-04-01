import React, { Component } from 'react';
import './TextField.css'


const TextField = (props) =>{
    return(
        <div className="input_container">
                <label>{props.label}</label>
                <input type="text" className="w-100" name={props.name} value={props.value} placeholder={props.label} onChange={props.onChange}></input>
                <span className="d-none">Field can't be empty!</span>
            </div>
    )
}
export default TextField
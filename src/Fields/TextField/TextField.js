import React, { Component } from 'react';
import './TextField.css'

class TextField extends Component{
    constructor(props){
        super(props)
        this.state = {
            value: undefined,
            isValid: undefined
        }
        this.updateValue = this.updateValue.bind(this)
    }

    updateValue(event){
        let value = event.target.value
        let isValid = value.trim() !== ""

        this.setState((state, props) => ({
            isValid: isValid,
            value: value}))

        this.props.isValid(this.props.fieldID, isValid)
    }

    render(){
        let inputClasses = 'w-100'
        let errorMessageClasses = 'd-none'

        if(typeof this.state.isValid !== 'undefined'){
            let validity = this.state.isValid ? 'valid' : 'invalid'
            inputClasses += ` ${validity}`

            errorMessageClasses = this.state.isValid ? 'd-none' : 'text-danger'
        }

        return(
            <div className="input_container">
                <label>{this.props.label}</label>
                <input type="text" className={inputClasses} value={this.state.value} placeholder={this.props.label} onChange={this.updateValue} onBlur={this.updateValue}></input>
                <span className={errorMessageClasses}>Field can't be empty!</span>
            </div>
        )
    }
}

export default TextField
import React, { Component } from 'react';

class TextField extends Component{
    constructor(props){
        super(props)
        this.state = {
            value: props.defaultValue || '',
            isValid: undefined
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        this.setState({
            isValid: event.target.value.trim() !== "",
            value: event.target.value});
            this.props.isValid(this.props.fieldID,this.state.isValid)
    }

    render(){
        const inputCssClasses = "w-100"

        let inputClasses = ''
        let errorMessageClasses = 'd-none'

        if(this.state.isValid == null){
            inputClasses = inputCssClasses
        }
        else{
            let validity = this.state.isValid ? 'valid' : 'inValid'
            inputClasses = `${inputCssClasses} ${validity}`

            errorMessageClasses = this.state.isValid ? 'd-none' : ''
        }

        return(
            <div className="input_container">
                <label>{this.props.label}</label>
                <input type="text" className={inputClasses} value={this.state.value} placeholder={this.props.label} onChange={this.handleChange}></input>
                <span className={errorMessageClasses}>Field can't be empty!</span>
            </div>
        )
    }
}

export default TextField
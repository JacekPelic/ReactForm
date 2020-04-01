import React from 'react';
import './DropdownField.css'

class DropdownField extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: props.defaultValue || undefined,
            isValid: undefined
        }

    this.UpdateValue = this.UpdateValue.bind(this)
    }

    UpdateValue(e) {
        this.setState({
            isValid: true,
            value: e.target.value
        })
        this.props.isValid(this.props.fieldID, true)
    }

    render(){
        let selectClasses = 'form-control w-100'
        let errorMessageClasses = 'd-none'

        if(typeof this.state.isValid !== 'undefined'){
            let validity = this.state.isValid ? 'valid' : 'invalid'
            selectClasses += ` ${validity}`

            errorMessageClasses = this.state.isValid ? 'd-none' : 'text-danger'
        }        
        
        let placeholder = <option key={0} value="default" disabled>{this.props.placeholder}</option>
        const options = this.props.selectOptions.map((value, step) =>{
            return(<option key={step+1}>{value}</option>)
        })

        options.unshift(placeholder)

        return(
            <div className="input_container w-100">
                <label>{this.props.label}</label>
                <select defaultValue="default" onChange={this.UpdateValue} onBlur={this.UpdateValue} className={selectClasses}>
                    {options}
                </select>
                <span className={errorMessageClasses}>Field can't be empty!</span>
            </div>
        )
    }
}

export default DropdownField
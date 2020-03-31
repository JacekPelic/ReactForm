import React from 'react';

class DropdownField extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: props.defaultValue,
            isValid: false
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
        
        
        let placeholder = <option key={0} value="default" disabled>{this.props.placeholder}</option>
        const options = this.props.selectOptions.map((value, step) =>{
            return(<option key={step+1}>{value}</option>)
        })

        options.unshift(placeholder)

        return(
            <div className="input_container w-100">
                <label>{this.props.label}</label>
                <select defaultValue="default" onChange={this.UpdateValue} onBlur={this.UpdateValue} className="form-control w-100">            
                    {options}
                </select>
                <span>Field can't be empty!</span>
            </div>
        )
    }
}

export default DropdownField
import React from 'react'

class CheckboxField extends React.Component{
    constructor(props){
        let isRequired = props.isRequired =='true' || false
        let isValid = !isRequired
        super(props);
        this.state = {
            value: props.defaultValue,
            text: props.text,
            isRequired: isRequired,
            isValid: isValid
        }
    this.UpdateValue = this.UpdateValue.bind(this)
    this.props.isValid(this.props.fieldID, isValid)
    }

    UpdateValue(e) {
        let isValid = this.state.isRequired ? e.target.checked : true

        this.setState({
            value: e.target.checked,
            isValid: isValid
        })

        this.props.isValid(this.props.fieldID, isValid)
    }

    render(){
        return (
            <div className="form-check">
                <label className="form-check-label">
                    <input className="form-check-input" onBlur={this.UpdateValue} type="checkbox"  value={this.state.value}/>
                    {this.state.text}
                </label>
            </div>
        )
    }
}

export default CheckboxField
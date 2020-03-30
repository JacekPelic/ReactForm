import React from 'react'

class CheckboxField extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: props.defaultValue,
            text: props.text
        }
    this.UpdateValue = this.UpdateValue.bind(this)
    }

    UpdateValue(e) {
        this.setState({value: e.target.value})
    }

    render(){
        return (
            <div className="form-check">
                <input className="form-check-input" type="radio" value={this.state.value}/>
                <label className="form-check-label">
                    {this.state.text}
                </label>
            </div>
        )
    }
}

export default CheckboxField
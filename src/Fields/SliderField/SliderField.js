import React from 'react';

class SliderField extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: props.defaultValue
        }

    this.UpdateValue = this.UpdateValue.bind(this)
    }

    UpdateValue(e) {
        this.setState({value: e.target.value})
    }

    render(){
        return(
        <div className="slider_wrapper container">
        <div className="row">
            <div className="col-6">
                <span>Label:</span>
            </div>
            <div className="col-6">
                {this.state.value} kr.
            </div>
        </div>
        <div className="row">
            <input className="custom-range" type="range" onChange={this.UpdateValue} value={this.state.value} min={this.props.minValue} max={this.props.maxValue} step={this.props.step}/>
        </div>
    </div>)
    }
}

export default SliderField
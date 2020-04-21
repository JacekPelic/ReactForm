import React from 'react';

const SliderField = (props) =>{
    
    return(
        <div className="slider_wrapper container">
        <div className="row">
            <div className="col-6">
                <span>{props.name}:</span>
            </div>
            <div className="col-6">
                {props.value} {props.suffix}
            </div>
        </div>
        <div className="row">
            <input className="custom-range" type="range" {...props}/>
        </div>
    </div>)    
}


export default SliderField
import React from 'react';

const ProgressStep = (props) => {
    return (
        <div className="col text-center">
            <div className="row center">
                {props.symbol}
            </div>
            <div className="row center">
                {props.title}
            </div>
        </div>
    )
}

export default ProgressStep;
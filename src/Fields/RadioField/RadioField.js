import React from 'react'

const RadioField = (props) => {
    return (
        <React.Fragment>
            <div>
                Do you have extra income?
        </div>
            <div className="radio-options">
                {props.radioOptions.map((option, step) => (
                    <div className={option.value == props.value ? "radio-option radio-selected" : "radio-option"}>
                        <label key={step + 1} className="w-100 py-2 m-0 text-center radio-label">
                            <input className="invisible" type="radio" {...props} value={option.value} />
                            {option.display}
                        </label>
                    </div>
                ))}
            </div>
        </React.Fragment>
    )
}

export default RadioField;
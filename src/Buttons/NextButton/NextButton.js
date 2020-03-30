import React from 'react'
import './NextButton.css'

function NextButton(props){

    let buttonCssClasses = "btn btn-success btn-lg btn-block ";
    let onClickHandler = () => props.onClick();

    if(props.isDisabled){
        buttonCssClasses += "disabled"
        onClickHandler = function(){};
    }

    return(
        <div className="button_container">
            <button onClick={onClickHandler} type="button" className={buttonCssClasses}>{props.text}</button>
        </div>
    );
}

export default NextButton
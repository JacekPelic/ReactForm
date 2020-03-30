import React from 'react'
import './BackButton.css'

function BackButton(props){
    return(
            <a className="pointer" onClick={() => props.onClick()}>{props.text}</a>
    );
}

export default BackButton
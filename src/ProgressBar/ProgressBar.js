import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import ProgressStep from './ProgressStep/ProgressStep'

const ProgressBar = (props) => {

    const progressSteps = props.steps.map((step, index) => {
        let symbol;
        let title;
        //Completed
        if (index < props.currentStep) {
            symbol =
                <React.Fragment>
                    <div className="circle-line circle-line-completed"></div>
                    <FontAwesomeIcon icon={faCheckCircle} color="rgb(62, 187, 57)" size="lg" ></FontAwesomeIcon>
                </React.Fragment>
            title = <font className="title">{step.props.title}</font>
        }
        //Current & last
        else if (index == props.currentStep && index == props.steps.length - 1){
            symbol =
                <React.Fragment>
                    <div className="circle">
                        <font className="font-weight-bold">{index}</font>
                    </div>
                </React.Fragment>
            title = <font className="title font-weight-bold">{step.props.title}</font>
        }
        //Current
        else if (index == props.currentStep) {
            symbol =
                <React.Fragment>
                    <div className="circle-line"></div>
                    <div className="circle">
                        <font className="font-weight-bold">{index}</font>
                    </div>
                </React.Fragment>
            title = <font className="title font-weight-bold">{step.props.title}</font>
        }
        //Last one
        else if (index == props.steps.length - 1) {
            symbol =
                <React.Fragment>
                    <div className="circle">
                        <font>{index}</font>
                    </div>
                </React.Fragment>
            title = <font className="title">{step.props.title}</font>
        }
        //Future
        else {
            symbol =
                <React.Fragment>
                    <div className="row center">
                        <div className="circle-line"></div>
                        <div className="circle">
                            <font>{index}</font>
                        </div>
                    </div>
                </React.Fragment>
            title = <font className="title">{step.props.title}</font>
        }

        return (<ProgressStep symbol={symbol} title={title}></ProgressStep>)
    })

    return (
        <div className="row">
            {progressSteps}
        </div>
    )
}

export default ProgressBar;
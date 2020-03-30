import React from 'react'
import FirstStep from '../Steps/FirstStep/FirstStep'
import SecondStep from '../Steps/SecondStep/SecondStep';

class Form extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            currentStep: 0
        }

    this.nextStep = this.nextStep.bind(this)
    }

    nextStep(){
        this.setState({currentStep: this.state.currentStep + 1})
    }
    previousStep(){
        this.setState({currentStep: this.state.currentStep - 1})
    }

    render(){
        const Steps = [ <FirstStep nextStep={() => this.nextStep()}/>, <SecondStep nextStep={() => this.nextStep()} previousStep={() => this.previousStep()}/>]

        return(
        <div>
            {Steps[this.state.currentStep]}
        </div>
        )
    }
}


export default Form
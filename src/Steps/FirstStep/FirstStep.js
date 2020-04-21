import React, {useState} from 'react';
import SliderField from '../../Fields/SliderField/SliderField'
import DropdownField from '../../Fields/DropdownField/DropdownField'
import NextButton from '../../Buttons/NextButton/NextButton'

const FirstStep = (props) => {

  const loanAmount = <SliderField {...props.loanAmount}></SliderField> 
  const loanPeriod = <SliderField {...props.loanPeriod}></SliderField> 
  const loanPurpose = <DropdownField {...props.loanPurpose}></DropdownField> 
    return(
     <div className="container">
      <div className="row">
        <p className= "col text-center">Spar tusindvis af kroner - få tilbud fra flere banker her</p>
      </div>
      <div className="row">
        <div className="col-6">
          {loanAmount}
        </div>
        <div className="col-6">
          {loanPeriod}
        </div>
      </div>
        <div className="row">  
          <p className= "col text-center">EXAMPLE KR/MD</p>
        </div>
        <div className="row">
          {loanPurpose}
        </div>
        <NextButton isDisabled="" onClick={() => props.nextStep()} text="Go to the next tab"></NextButton>
    </div>   
    )
}

export default FirstStep
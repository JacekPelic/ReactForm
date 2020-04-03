import React, {useState} from 'react';
import SliderField from '../../Fields/SliderField/SliderField'
import DropdownField from '../../Fields/DropdownField/DropdownField'
import NextButton from '../../Buttons/NextButton/NextButton'

const selectOptions = [
  {value: "", display: "Chose a value"},
  {value: "option one", display: "option one"},
  {value: "option two", display: "option two"},
  {value: "option three", display: "option three"},
  {value: "option four", display: "option four"}
]

function FirstStep(props){
  
  const [isStepValid, setisStepValid] = useState(false)

    return(
     <div className="container">
      <div className="row">
        <p className= "col text-center">Spar tusindvis af kroner - få tilbud fra flere banker her</p>
      </div>
      <div className="row">
        <div className="col-6">
          <SliderField defaultValue='5000' minValue="0" maxValue="10000" step="100"></SliderField>
        </div>
        <div className="col-6">
        <SliderField defaultValue='500' minValue="0" maxValue="1000" step="10"></SliderField>
        </div>
      </div>
        <div className="row">  
          <p className= "col text-center">EXAMPLE KR/MD</p>
        </div>
        <div className="row">
          <DropdownField label="Label" placeholder="Pick an option" selectOptions={selectOptions}></DropdownField>
        </div>
        <NextButton isDisabled="" onClick={() => props.nextStep()} text="Go to the next tab"></NextButton>
    </div>   
    )
}

export default FirstStep
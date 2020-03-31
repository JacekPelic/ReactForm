import React, {useState} from 'react'
import TextField from '../../Fields/TextField/TextField'
import DropdownField from '../../Fields/DropdownField/DropdownField'
import CheckboxField from '../../Fields/CheckboxField/CheckboxField'
import NextButton from '../../Buttons/NextButton/NextButton'
import BackButton from '../../Buttons/BackButton/BackButton'

const selectOptions = ["option one","option two","option three","option four"]

function SecondStep(props) {

    let fieldValidators= [false,false,false,false,false,false,false,false,false,false]

    const [nextButtonDisabled, setNextButtonDisabled] = useState(false)
    const [stepValid, setstepValid] = useState(false)

    let nameField = <TextField fieldID="0" isValid={isFieldValid} label="First and last name"></TextField>;
    let emailField = <TextField fieldID="1" isValid={isFieldValid} label="Email"></TextField>
    let phoneField = <TextField fieldID="2" isValid={isFieldValid} label="Phone"></TextField>
    let cprField = <TextField fieldID="3" isValid={isFieldValid} label="CPR"></TextField>
    let martialStatusField = <DropdownField fieldID="4" isValid={isFieldValid} placeholder="Pick an option" label="Select first option" selectOptions={selectOptions}></DropdownField>
    let citizenshipField = <DropdownField fieldID="5" isValid={isFieldValid} placeholder="Pick an option" label="Select second option" selectOptions={selectOptions}></DropdownField>
    let houseTypeField = <DropdownField fieldID="6" isValid={isFieldValid} placeholder="Pick an option" label="Select third option" selectOptions={selectOptions}></DropdownField>
    let consentFirstField = <CheckboxField fieldID="7" isValid={isFieldValid} isRequired='true' text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et mollis nisi."></CheckboxField>
    let consentSecondField = <CheckboxField fieldID="8" isValid={isFieldValid} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et mollis nisi."></CheckboxField>
    let consentThirdField = <CheckboxField fieldID="9" isValid={isFieldValid} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et mollis nisi."></CheckboxField>

    let inputFields = [nameField, emailField, phoneField, cprField, martialStatusField, citizenshipField, houseTypeField, consentFirstField, consentSecondField, consentThirdField]

    function isFieldValid(fieldID, isValid){
        fieldValidators[fieldID]=isValid
    }

    function isStepValid() {
        
        let isStepValid = true;
        fieldValidators.map((validator, index) => {
            isStepValid &= validator
        })
        return isStepValid
    }

    let onClickHandler = function()
    {
        if(isStepValid())
        {
            //setNextButtonDisabled(false)
            console.log("Moved for the next step!")
        }
        else
        {
            console.log("Invalid form!")
            //setNextButtonDisabled(true)
        }

    }

    return(
        <div className="container">
            <div className="row my-2">
                <div className="col-12">
                    {nameField}
                </div>                
            </div>            
            <div className="row my-2">
                <div className="col-12">
                    {emailField}
                </div>                
            </div>            
            <div className="row my-2">
                <div className="col-12">
                    {phoneField}
                </div>                
            </div>            
            <div className="row my-2">
                <div className="col-12">
                    {cprField}
                </div>                
            </div>
            <div className="row my-2">
                <div className="col-12">
                    {martialStatusField}
                </div>
            </div>
            <div className="row my-2">
                <div className="col-12">
                    {citizenshipField}
                </div>
            </div>
            <div className="row my-2">
                <div className="col-12">
                    {houseTypeField}
                </div>
            </div>
            <div className="row my-2">
                <div className="col-12">
                    
                </div>
            </div>
            <div className="row my-2">
                <div className="col-12">
                    {consentFirstField}
                </div>
            </div>
            <div className="row my-2">
                <div className="col-12">
                    {consentSecondField}
                </div>
            </div>
            <div className="row my-2">
                <div className="col-12">
                    {consentThirdField}
                </div>
            </div>
            <NextButton isDisabled={nextButtonDisabled} onClick={onClickHandler} text="Go to the next tab"></NextButton>
        </div>
    )
}

export default SecondStep
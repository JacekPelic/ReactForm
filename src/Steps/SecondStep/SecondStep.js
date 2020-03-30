import React, {useState} from 'react'
import TextField from '../../Fields/TextField/TextField'
import DropdownField from '../../Fields/DropdownField/DropdownField'
import CheckboxField from '../../Fields/CheckboxField/CheckboxField'
import NextButton from '../../Buttons/NextButton/NextButton'
import BackButton from '../../Buttons/BackButton/BackButton'

const selectOptions = ["option one","option two","option three","option four"]

function SecondStep(props) {

    const [fieldValitators, setFieldValidators] = useState([false,false,false,false])

    const [nextButtonDisabled, setNextButtonDisabled] = useState(false)
    const [stepValid, setstepValid] = useState(false)

    const [nameFieldValid, setNameFieldValid] = useState(false)
    const [emailFieldValid, setEmailFieldValid] = useState(false)
    const [phoneFieldValid, setPhoneFieldValid] = useState(false)
    const [cprFieldValid, setCprFieldValid] = useState(false)
    const [martialStatusFieldValid, setMartialStatusFieldValid] = useState(false)
    const [citizenshipFieldValid, setCitizenshipFieldValid] = useState(false)
    const [houseTypeFieldValid, setHouseTypeFieldValid] = useState(false)
    const [consent1FieldValid, setConsent1FieldValid] = useState(false)
    const [consent2FieldValid, setConsent2FieldValid] = useState(false)
    const [consent3FieldValid, setConsent3FieldValid] = useState(false)

    let nameField = <TextField fieldID="0" isValid={isFieldValid} label="First and last name"></TextField>;
    let emailField = <TextField fieldID="1" isValid={isFieldValid} label="Email"></TextField>
    let phoneField = <TextField fieldID="2" isValid={isFieldValid} label="Phone"></TextField>
    let cprField = <TextField fieldID="3" isValid={isFieldValid} label="CPR"></TextField>
    let martialStatusField = <DropdownField placeholder="Pick an option" selectOptions={selectOptions}></DropdownField>
    let citizenshipField = <DropdownField placeholder="Pick an option" selectOptions={selectOptions}></DropdownField>
    let houseTypeField = <DropdownField placeholder="Pick an option" selectOptions={selectOptions}></DropdownField>
    let consent1Field = <CheckboxField text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et mollis nisi."></CheckboxField>
    let consent2Field = <CheckboxField text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et mollis nisi."></CheckboxField>
    let consent3Field = <CheckboxField text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et mollis nisi."></CheckboxField>

    let inputFields = [nameField, emailField, phoneField, cprField, martialStatusField, citizenshipField, houseTypeField, consent1Field, consent2Field, consent3Field]

    let fieldValidatorArray = [false, false, false, false]

    function isFieldValid(fieldID, isValid){fieldValidatorArray[fieldID] = isValid}

    function isStepValid() {
        
        let isStepValid = true;
        fieldValidatorArray.map((validator, index) => {
            isStepValid &= validator
        })
        return isStepValid
    }

    let onClickHandler = function()
    {
        if(isStepValid())
        {
            //setNextButtonDisabled(false)
            return props.onClick();
        }
        else
        {
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
                    {consent1Field}
                </div>
            </div>
            <div className="row my-2">
                <div className="col-12">
                    {consent2Field}
                </div>
            </div>
            <div className="row my-2">
                <div className="col-12">
                    {consent3Field}
                </div>
            </div>
            <NextButton isDisabled={nextButtonDisabled} onClick={onClickHandler} text="Go to the next tab"></NextButton>
        </div>
    )
}

export default SecondStep
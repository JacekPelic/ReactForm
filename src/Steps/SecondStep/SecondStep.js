import React, {Component} from 'react'
import TextField from '../../Fields/TextField/TextField'
import DropdownField from '../../Fields/DropdownField/DropdownField'
import CheckboxField from '../../Fields/CheckboxField/CheckboxField'
import WithDependent from '../../Fields/WithDependend/WithDependent'
import NextButton from '../../Buttons/NextButton/NextButton'
import RadioField from '../../Fields/RadioField/RadioField'

const selectOptions = [
    {value: "option one", display: "option one"},
    {value: "option two", display: "option two"},
    {value: "option three", display: "option three"},
    {value: "option four", display: "option four"}
]

const SecondStep = (props) => {

const nextButtonHandler = () =>{
        if(props.isStepValid())
            props.nextStep();            
    }

        const nameField = <TextField {...props.name}></TextField>;

        const emailField = <TextField {...props.email}></TextField>;

        const phoneField = <TextField {...props.phone}></TextField>;

        const cprField = <TextField {...props.cpr}></TextField>;

        const martialStatusField = <DropdownField {...props.martialStatus}> </DropdownField>;

        const citizenshipField = <DropdownField {...props.citizenship}></DropdownField>;

        const hasExtraIncome = <RadioField {...props.hasExtraIncome}></RadioField>;

        const extraIncomeAmount = <TextField {...props.extraIncomeAmount}></TextField>
        const dependendField = WithDependent(extraIncomeAmount, props.extraIncomeAmount.visable)        

        const consentFirstField = <CheckboxField {...props.consentFirst}></CheckboxField>

        const consentSecondField = <CheckboxField {...props.consentSecond}></CheckboxField>

        const consentThirdField = <CheckboxField {...props.consentThird}></CheckboxField>

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
                        {hasExtraIncome}
                    </div>
                </div>
                <div className="row my-2">
                    <div className="col-12">
                        
                    </div>
                </div>
                <div className="row my-2">
                    <div className="col-12">
                      {dependendField}
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
                <NextButton onClick={() => nextButtonHandler()} text="Go to the next tab"></NextButton>
                <a href="#" onClick={() => props.previousStep()}>
                    <font>
                        Back
                    </font>
                </a>
            </div>
        );
}
export default SecondStep;
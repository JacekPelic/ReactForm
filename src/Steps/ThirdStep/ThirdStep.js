import React from 'react'
import DropdownField from "../../Fields/DropdownField/DropdownField"
import TextField from "../../Fields/TextField/TextField"
import RadioField from "../../Fields/RadioField/RadioField"
import NextButton from '../../Buttons/NextButton/NextButton'

const ThirdStep = (props) => {
    
    const employmentStatus = <DropdownField {...props.employmentStatus}></DropdownField>
    const employmentSinceMonth = <DropdownField {...props.employmentSinceMonth}></DropdownField>
    const employmentSinceYear = <DropdownField {...props.employmentSinceYear}></DropdownField>
    const householdAmountAverage = <TextField {...props.householdAmountAverage}></TextField>
    const memberOfUnemploymentFound = <RadioField {...props.memberOfUnemploymentFound}></RadioField>
    const otherSourcesOfIncome = <RadioField {...props.otherSourcesOfIncome}></RadioField>
    const childrenInHome = <DropdownField {...props.childrenInHome}></DropdownField>
    const carsInHome = <DropdownField {...props.carsInHome}></DropdownField>
    const registredInRki = <DropdownField {...props.registredInRki}></DropdownField>

    const nextButtonHandler = () =>{
        if(props.isStepValid())
            props.nextStep();            
    }

    return(
        <div className="container">
            <div className="row my-2">
                <div className="col-12">
                    {employmentStatus}
                </div>                
            </div>
            <div className="row my-2">
                <div className="col-6">
                    Current employment since
                </div>                
                <div className="col-6">
                    <div className="row">
                         <div className="col-7">
                            {employmentSinceMonth}
                         </div>
                         <div className= "col-5">
                            {employmentSinceYear}
                         </div>
                    </div>
                </div>
            </div>
            <div className="row my-2">
                <div className="col-12">
                    {householdAmountAverage}
                </div>
            </div>
            <div className="row my-2">
                <div className="col-12">
                    {memberOfUnemploymentFound}
                </div>
            </div>
            <div className="row my-2">
                <div className="col-12">
                    {otherSourcesOfIncome}
                </div>
            </div>
            <div className="row my-2">
                <div className="col-12">
                    {childrenInHome}
                </div>
            </div>
            <div className="row my-2">
                <div className="col-12">
                    {carsInHome}
                </div>
            </div>
            <div className="row my-2">
                <div className="col-12">
                    {registredInRki}
                </div>
            </div>
            <NextButton onClick={() => nextButtonHandler()} text="Go to the next tab"></NextButton>
            <a href="#" onClick={() => props.previousStep()}>
                <font>
                    Back
                </font>
            </a>
        </div>
    )
}

export default ThirdStep
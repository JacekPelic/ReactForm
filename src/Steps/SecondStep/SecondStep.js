import React, {useState, Component} from 'react'
import TextField from '../../Fields/TextField/TextField'
import DropdownField from '../../Fields/DropdownField/DropdownField'
import CheckboxField from '../../Fields/CheckboxField/CheckboxField'
import NextButton from '../../Buttons/NextButton/NextButton'
import BackButton from '../../Buttons/BackButton/BackButton'
import { render } from '@testing-library/react'
import Validate from '../../Validation/Validate'

const selectOptions = ["option one","option two","option three","option four"]

class SecondStep extends Component{

    constructor() {
        super();

        this.state={
            formFields: {
                name:{
                    name:"name",
                    value: "",
                    label: "First and last name",
                    valid: false,
                    touched: false,
                    validationRules:{
                        minWords: 2
                    }
                },
                email:{
                    name:"email",
                    value: "",
                    label: "Email",
                    valid: false,
                    touched: false,
                    validationRules:{
                        required: true
                    }
                },
                phone:{
                    name:"phone",
                    value: "",
                    label: "Phone",
                    valid: false,
                    touched: false,
                    validationRules:{
                        required: true
                    }
                },
                cpr:{
                    name:"cpr",
                    value: "",
                    label: "CPR",
                    valid: false,
                    touched: false,
                    validationRules:{
                        required: true
                    }
                },
                martialStatus:{
                    name:"martialStatus",
                    value: "",
                    label: "Select martial status",
                    placeholder: "Select option",
                    valid: false,
                    touche: false,
                    selectOptions: {selectOptions},
                    validationRules:{
                        required: true
                    }
                },
                citizenship:{
                    name:"citizenship",
                    value: "",
                    label: "Select citizenship",
                    placeholder: "Select option",
                    valid: false,
                    touche: false,
                    selectOptions: {selectOptions},
                    validationRules:{
                        required: true
                    }
                },
                houseType:{
                    name:"houseType",
                    value: "",
                    label: "Select type of house",
                    placeholder: "Select option",
                    valid: false,
                    touche: false,
                    selectOptions: {selectOptions},
                    validationRules:{
                        required: true
                    }
                }
            }
        }
        this.changeHandler = this.changeHandler.bind(this)
    }    
    
    changeHandler(event){
        const name = event.target.name;
        const value = event.target.value;

        const updatedFormFields = this.state.formFields;
        const updatedFormElement = updatedFormFields[name];

        updatedFormElement.value = value;
        updatedFormElement.touched = true;
        updatedFormElement.valid = Validate(value, updatedFormElement.validationRules)

        updatedFormFields[name] = updatedFormElement;

        this.setState({
            formFields: updatedFormFields
        });
    }

    render(){
        const nameField = <TextField name={this.state.formFields.name.name}
                                    value={this.state.formFields.name.value}
                                    label={this.state.formFields.name.label}
                                    onChange={this.changeHandler}>
                        </TextField>;
        const emailField = <TextField name={this.state.formFields.email.name}
                                    value={this.state.formFields.email.value}
                                    label={this.state.formFields.email.label}
                                    onChange={this.changeHandler}>
                        </TextField>;
        const phoneField = <TextField name={this.state.formFields.phone.name}
                                    value={this.state.formFields.phone.value}
                                    label={this.state.formFields.phone.label}
                                    onChange={this.changeHandler}>
                        </TextField>;
        const cprField = <TextField name={this.state.formFields.cpr.name}
                                value={this.state.formFields.cpr.value}
                                label={this.state.formFields.cpr.label}
                                onChange={this.changeHandler}>
                        </TextField>;
        const martialStatusField = <DropdownField name={this.state.formFields.martialStatus.name}
                                        label={this.state.formFields.martialStatus.label}
                                        placeholder={this.state.formFields.martialStatus.placeholder}
                                        selectOptions={selectOptions}
                                        onChange={this.changeHandler}>
                                    </DropdownField>;
        const citizenshipField = <DropdownField name={this.state.formFields.citizenship.name}
                                        label={this.state.formFields.citizenship.label}
                                        placeholder={this.state.formFields.citizenship.placeholder}
                                        selectOptions={selectOptions}
                                        onChange={this.changeHandler}>
                                    </DropdownField>;
        const houseTypeField = <DropdownField name={this.state.formFields.houseType.name}
                                        label={this.state.formFields.houseType.label}
                                        placeholder={this.state.formFields.houseType.placeholder}
                                        selectOptions={selectOptions}
                                        onChange={this.changeHandler}>
                                    </DropdownField>;                                                                        
                
        // let consentFirstField = <CheckboxField fieldID="7" isValid={isFieldValid} isRequired='true' text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et mollis nisi."></CheckboxField>
        // let consentSecondField = <CheckboxField fieldID="8" isValid={isFieldValid} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et mollis nisi."></CheckboxField>
        // let consentThirdField = <CheckboxField fieldID="9" isValid={isFieldValid} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et mollis nisi."></CheckboxField>

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
                {/* <div className="row my-2">
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
                </div> */}
                {/* <NextButton isDisabled={nextButtonDisabled} onClick={onClickHandler} text="Go to the next tab"></NextButton> */}
            </div>
        );
    }
}
export default SecondStep;
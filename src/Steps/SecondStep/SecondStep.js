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
                    touched: false,
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
                    touched: false,
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
                    touched: false,
                    selectOptions: {selectOptions},
                    validationRules:{
                        required: true
                    }
                },
                consentFirst:{
                    name:"consentFirst",
                    label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et mollis nisi.",
                    value:"",
                    valid: false,
                    touched: false,
                    validationRules:{
                        required: true
                    }
                },
                consentSecond:{
                    name:"consentSecond",
                    label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et mollis nisi.",
                    value:"",
                    valid: false,
                    touched: false,
                    validationRules:{
                    }
                },
                consentThird:{
                    name:"consentThird",
                    label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et mollis nisi.",
                    value:"",
                    valid: false,
                    touched: false,
                    validationRules:{
                    },
                }
            }
        }
        this.changeHandler = this.changeHandler.bind(this)
        this.touchHandler = this.touchHandler.bind(this)
    }

    changeHandler(event){
        const name = event.target.name;
        const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;

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

    touchHandler(event){
        const name = event.target.name;
        const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
        
        const updatedFormFields = this.state.formFields;
        const updatedFormElement = updatedFormFields[name];

        updatedFormElement.touched = true;
        updatedFormElement.valid = Validate(value, updatedFormElement.validationRules)

        updatedFormFields[name] = updatedFormElement;

        this.setState({
            formFields: updatedFormFields
        });
    }

    isStepValid(){
        let isStepValid = true;
        const updatedFormFields = this.state.formFields;

        for (let field in updatedFormFields) {
            let updatedField = updatedFormFields[field];
            updatedField.touched = true;
            updatedField.valid = Validate(updatedField.value, updatedField.validationRules);

            updatedFormFields[field] = updatedField;

            isStepValid = isStepValid && updatedField.valid;
        }
        
        this.setState({
            formFields: updatedFormFields
        });

        return isStepValid;
    }

    nextButtonHandler(){
        if(this.isStepValid())
            this.props.nextStep();            
    }

    render(){
        const nameField = <TextField name={this.state.formFields.name.name}
            value={this.state.formFields.name.value}
            label={this.state.formFields.name.label}
            touched={this.state.formFields.name.touched}
            valid={this.state.formFields.name.valid}
            onChange={this.changeHandler}
            onBlur={this.touchHandler}>
        </TextField>;

        const emailField = <TextField name={this.state.formFields.email.name}
            value={this.state.formFields.email.value}
            label={this.state.formFields.email.label}
            touched={this.state.formFields.email.touched}
            valid={this.state.formFields.email.valid}
            onChange={this.changeHandler}
            onBlur={this.touchHandler}>
        </TextField>;

        const phoneField = <TextField name={this.state.formFields.phone.name}
            value={this.state.formFields.phone.value}
            label={this.state.formFields.phone.label}
            touched={this.state.formFields.phone.touched}
            valid={this.state.formFields.phone.valid}
            onChange={this.changeHandler}
            onBlur={this.touchHandler}>
        </TextField>;

        const cprField = <TextField name={this.state.formFields.cpr.name}
            value={this.state.formFields.cpr.value}
            label={this.state.formFields.cpr.label}
            touched={this.state.formFields.cpr.touched}
            valid={this.state.formFields.cpr.valid}
            onChange={this.changeHandler}
            onBlur={this.touchHandler}>
        </TextField>;

        const martialStatusField = <DropdownField name={this.state.formFields.martialStatus.name}
            value={this.state.formFields.martialStatus.value}
            label={this.state.formFields.martialStatus.label}            
            placeholder={this.state.formFields.martialStatus.placeholder}
            selectOptions={selectOptions}
            touched={this.state.formFields.martialStatus.touched}
            valid={this.state.formFields.martialStatus.valid}
            onChange={this.changeHandler}
            onBlur={this.touchHandler}>
        </DropdownField>;

        const citizenshipField = <DropdownField name={this.state.formFields.citizenship.name}
            value={this.state.formFields.citizenship.value}
            label={this.state.formFields.citizenship.label}
            placeholder={this.state.formFields.citizenship.placeholder}
            selectOptions={selectOptions}
            touched={this.state.formFields.citizenship.touched}
            valid={this.state.formFields.citizenship.valid}
            onChange={this.changeHandler}
            onBlur={this.touchHandler}>
        </DropdownField>;

        const houseTypeField = <DropdownField name={this.state.formFields.houseType.name}
            value={this.state.formFields.houseType.value}
            label={this.state.formFields.houseType.label}
            placeholder={this.state.formFields.houseType.placeholder}
            selectOptions={selectOptions}
            touched={this.state.formFields.houseType.touched}
            valid={this.state.formFields.houseType.valid}
            onChange={this.changeHandler}
            onBlur={this.touchHandler}>
        </DropdownField>;

        const consentFirstField = <CheckboxField name={this.state.formFields.consentFirst.name}
            value={this.state.formFields.consentFirst.value}
            label={this.state.formFields.consentFirst.label}
            touched={this.state.formFields.consentFirst.touched}
            valid={this.state.formFields.consentFirst.valid}
            onChange={this.changeHandler}
            onBlur={this.touchHandler}>
        </CheckboxField>

        const consentSecondField = <CheckboxField name={this.state.formFields.consentSecond.name}
            value={this.state.formFields.consentSecond.value}
            label={this.state.formFields.consentSecond.label}
            touched={this.state.formFields.consentSecond.touched}
            valid={this.state.formFields.consentSecond.valid}
            onChange={this.changeHandler}
            onBlur={this.touchHandler}>
        </CheckboxField>

        const consentThirdField = <CheckboxField name={this.state.formFields.consentThird.name}
            value={this.state.formFields.consentThird.value}
            label={this.state.formFields.consentThird.label}
            touched={this.state.formFields.consentThird.touched}
            valid={this.state.formFields.consentThird.valid}
            onChange={this.changeHandler}
            onBlur={this.touchHandler}>
        </CheckboxField>

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
                <NextButton onClick={() => this.nextButtonHandler()} text="Go to the next tab"></NextButton>
            </div>
        );
    }
}
export default SecondStep;
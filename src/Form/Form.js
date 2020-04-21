import React from 'react'
import FirstStep from '../Steps/FirstStep/FirstStep'
import SecondStep from '../Steps/SecondStep/SecondStep';
import Validate from '../Validation/Validate'

const selectOptions = [
    {value: "", display: "Chose a value"},
    {value: "option one", display: "option one"},
    {value: "option two", display: "option two"},
    {value: "option three", display: "option three"},
    {value: "option four", display: "option four"}
]

class Form extends React.Component{
    constructor(props){
        super(props)
        this.onChange = this.onChange.bind(this)
        this.onBlur = this.onBlur.bind(this)
        this.onFocus = this.onFocus.bind(this)        
        this.nextStep = this.nextStep.bind(this)

        this.state = {
            currentStep: 0,
            formFields: [
                {
                    loanAmount:{
                        name:"loanAmount",
                        value: 5000,
                        min: 0,
                        max: 10000,
                        step: 100,
                        suffix: "kr.",
                        valid: true,
                        touched: false,
                        validationRules:{
                        },
                        onChange: this.onChange,
                        onBlur: this.onBlur,
                        onFocus: this.onFocus
                    },
                    loanPeriod:{
                        name:"loanPeriod",
                        value: 7,
                        min: 0,
                        max: 30,
                        step: 1,
                        suffix: "years",
                        valid: true,
                        touched: false,
                        validationRules:{
                        },
                        onChange: this.onChange,
                        onBlur: this.onBlur,
                        onFocus: this.onFocus
                    },
                    loanPurpose:{
                        name:"loanPurpose",
                        value:"",
                        label: "Select loan purpose",
                        placeholder: "Select option",
                        valid: false,
                        touched: false,
                        selectOptions: selectOptions,
                        validationRules:{
                            required: true
                        },
                        onChange: this.onChange,
                        onBlur: this.onBlur,
                        onFocus: this.onFocus
                    }
                },
                {
                    name:{
                        name:"name",
                        value: "",
                        label: "First and last name",
                        valid: false,
                        touched: false,
                        validationRules:{
                            minWords: 2
                        },
                        onChange: this.onChange,
                        onBlur: this.onBlur,
                        onFocus: this.onFocus
                    },
                    email:{
                        name:"email",
                        value: "",
                        label: "Email",
                        valid: false,
                        touched: false,
                        validationRules:{
                            required: true
                        },
                        onChange: this.onChange,
                        onBlur: this.onBlur,
                        onFocus: this.onFocus
                    },
                    phone:{
                        name:"phone",
                        value: "",
                        label: "Phone",
                        valid: false,
                        touched: false,
                        validationRules:{
                            required: true
                        },
                        onChange: this.onChange,
                        onBlur: this.onBlur,
                        onFocus: this.onFocus
                    },
                    cpr:{
                        name:"cpr",
                        value: "",
                        label: "CPR",
                        valid: false,
                        touched: false,
                        validationRules:{
                            required: true
                        },
                        onChange: this.onChange,
                        onBlur: this.onBlur,
                        onFocus: this.onFocus
                    },
                    martialStatus:{
                        name:"martialStatus",
                        value: "",
                        label: "Select martial status",
                        placeholder: "Select option",
                        valid: false,
                        touched: false,
                        selectOptions: selectOptions,
                        validationRules:{
                            required: true
                        },
                        onChange: this.onChange,
                        onBlur: this.onBlur,
                        onFocus: this.onFocus
                    },
                    citizenship:{
                        name:"citizenship",
                        value: "",
                        label: "Select citizenship",
                        placeholder: "Select option",
                        valid: false,
                        touched: false,
                        selectOptions: selectOptions,
                        validationRules:{
                            required: true
                        },
                        onChange: this.onChange,
                        onBlur: this.onBlur,
                        onFocus: this.onFocus
                    },
                    hasExtraIncome:{
                        name:"hasExtraIncome",
                        value: "",
                        label: "Do you have extra income?",
                        placeholder: "Select option",
                        valid: false,
                        touched: false,
                        radioOptions: [
                            {value: "yes", display: "Yes"},
                            {value: "no", display: "No"}
                        ],
                        onChange: this.onChange,
                        onBlur: this.onBlur,
                        onFocus: this.onFocus                                     
                    },
                    extraIncomeAmount:{
                        name: "extraIncomeAmount",
                        value: "",
                        label: "Put extra income amount",
                        valid: false,
                        touched: false,
                        validationRules:{
                            required: true
                        },
                        parent: "hasExtraIncome",
                        dependendValue: "yes",
                        visable: false,
                        onChange: this.onChange,
                        onBlur: this.onBlur,
                        onFocus: this.onFocus
                    },
                    consentFirst:{
                        name:"consentFirst",
                        label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et mollis nisi.",
                        value:"",
                        valid: false,
                        touched: false,
                        validationRules:{
                            required: true
                        },
                        onChange: this.onChange,
                        onBlur: this.onBlur,
                        onFocus: this.onFocus
                    },
                    consentSecond:{
                        name:"consentSecond",
                        label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et mollis nisi.",
                        value:"",
                        valid: false,
                        touched: false,
                        validationRules:{
                        },
                        onChange: this.onChange,
                        onBlur: this.onBlur,
                        onFocus: this.onFocus
                    },
                    consentThird:{
                        name:"consentThird",
                        label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et mollis nisi.",
                        value:"",
                        valid: false,
                        touched: false,
                        validationRules:{
                        },
                        onChange: this.onChange,
                        onBlur: this.onBlur,
                        onFocus: this.onFocus
                    }
                }
            ]            
        }
    }

    onChange(event){
        const name = event.target.name;
        const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;

        const updatedForm = Object.assign({}, this,this.state.formFields);
        const updatedFormStepFields = updatedForm[this.state.currentStep];
        const updatedField = updatedFormStepFields[name];

        const children = Object.values(updatedFormStepFields).filter(obj => obj.parent == name)

        children.forEach(child => {
            if(value === child.dependendValue){
                child.visable = true
            }
            else{
                child.value = "";
                child.touched = false;
                child.visable = false
            }                    
        })

        updatedField.value = value;
        updatedField.touched = true;
        updatedField.valid = Validate(value, updatedField.validationRules)

        updatedFormStepFields[name] = updatedField;

        this.setState({
            formFields: updatedForm
            }
        );
    }

    onBlur(event){
        const name = event.target.name;
        const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
        
        const updatedForm = Object.assign({}, this,this.state.formFields);
        const updatedFormStepFields = updatedForm[this.state.currentStep];
        const updatedField = updatedFormStepFields[name];

        updatedField.touched = true;
        updatedField.valid = Validate(value, updatedField.validationRules)

        updatedFormStepFields[name] = updatedField;

        this.setState({
            formFields: updatedForm
            }
        );
    }

    onFocus(event){
        const name = event.target.name;
        
        const updatedForm = Object.assign({}, this,this.state.formFields);
        const updatedFormStepFields = updatedForm[this.state.currentStep];
        const updatedField = updatedFormStepFields[name];

        updatedField.valid = true

        updatedFormStepFields[name] = updatedField;

        this.setState({
            formFields: updatedForm
            }
        );
    }

    nextStep(){
        this.setState({currentStep: this.state.currentStep + 1})
    }
    previousStep(){
        this.setState({currentStep: this.state.currentStep - 1})
    }

    render(){
        const Steps = [ <FirstStep {...this.state.formFields[0]} nextStep={() => this.nextStep()}/>, <SecondStep {...this.state.formFields[1]} nextStep={() => this.nextStep()} previousStep={() => this.previousStep()}/>]

        return(
        <div>
            {Steps[this.state.currentStep]}
        </div>
        )
    }
}


export default Form
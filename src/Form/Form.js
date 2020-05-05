import React from 'react'
import FirstStep from '../Steps/FirstStep/FirstStep'
import SecondStep from '../Steps/SecondStep/SecondStep';
import Validate from '../Validation/Validate'
import ThirdStep from '../Steps/ThirdStep/ThirdStep';

const selectOptions = [
    {value: "option one", display: "option one"},
    {value: "option two", display: "option two"},
    {value: "option three", display: "option three"},
    {value: "option four", display: "option four"}
]

let yearSelectOptions = [];

for (let i = 1920; i <= new Date().getFullYear(); i++){
    yearSelectOptions.push({value:i, display:i});
}

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
                },
                {
                    employmentStatus:{
                        name:"employmentStatus",
                        value: "",
                        label: "Employment status (choose the one that best suits you)",
                        valid: false,
                        touched: false,
                        selectOptions: [
                            {value: "Hourly wage earner", display: "Hourly wage earner"},
                            {value: "Employe salaried employee", display: "Employe salaried employee"},
                            {value: "supervisor", display: "supervisor"},
                            {value: "During Education", display: "During Education"},
                            {value: "Trainee / Apprentice", display: "Trainee / Apprentice"},
                            {value: "early retirement", display: "early retirement"},
                            {value: "senior citizen", display: "senior citizen"},
                            {value: "Available", display: "Available"},
                            {value: "Stay-at-home", display: "Stay-at-home"},
                            {value: "Self employed", display: "Self employed"},
                            {value: "Early retirement", display: "Early retirement"}
                        ],
                        validationRules:{
                            required: true
                        },
                        onChange: this.onChange,
                        onBlur: this.onBlur,
                        onFocus: this.onFocus
                    },
                    employmentSinceMonth:{
                        name:"employmentSinceMonth",
                        value: "",
                        label: "Month",
                        valid: false,
                        touched: false,
                        selectOptions: [
                            {value: "January", display: "January"},
                            {value: "February", display: "February"},
                            {value: "March", display: "March"},
                            {value: "April", display: "April"},
                            {value: "May", display: "May"},
                            {value: "June", display: "June"},
                            {value: "July", display: "July"},
                            {value: "August", display: "August"},
                            {value: "September", display: "September"},
                            {value: "October", display: "October"},
                            {value: "November", display: "November"},
                            {value: "December", display: "December"}
                        ],
                        validationRules:{
                            required: true
                        },
                        onChange: this.onChange,
                        onBlur: this.onBlur,
                        onFocus: this.onFocus
                    },
                    employmentSinceYear:{
                        name:"employmentSinceYear",
                        value: "",
                        label: "Year",
                        valid: false,
                        touched: false,
                        selectOptions: yearSelectOptions,
                        validationRules:{
                            required: true
                        },
                        onChange: this.onChange,
                        onBlur: this.onBlur,
                        onFocus: this.onFocus
                    },
                    householdAmountAverage:{
                        name:"householdAmountAverage",
                        value: "",
                        label: "Household average amount available",
                        valid: false,
                        touched: false,
                        validationRules:{
                            required: true
                        },
                        onChange: this.onChange,
                        onBlur: this.onBlur,
                        onFocus: this.onFocus
                    },
                    memberOfUnemploymentFound:{
                        name:"memberOfUnemploymentFound",
                        value: "",
                        label: "Member of the unemployment fund",
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
                    otherSourcesOfIncome:{
                        name:"otherSourcesOfIncome",
                        value: "",
                        label: "Do you have other sources of income?",
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
                    childrenInHome:{
                        name:"childrenInHome",
                        value: "",
                        label: "Number of children living at home under 18 years",
                        valid: false,
                        touched: false,
                        selectOptions: [
                            {value: "0", display: "0"},
                            {value: "1", display: "1"},
                            {value: "2", display: "2"},
                            {value: "3", display: "3"},
                            {value: "4", display: "4"},
                            {value: "5", display: "5"},
                            {value: "6+", display: "6+"}
                        ],
                        onChange: this.onChange,
                        onBlur: this.onBlur,
                        onFocus: this.onFocus                                     
                    },
                    carsInHome:{
                        name:"carsInHome",
                        value: "",
                        label: "Number of cars in the household (excluding company car)",
                        valid: false,
                        touched: false,
                        selectOptions: [
                            {value: "0", display: "0"},
                            {value: "1", display: "1"},
                            {value: "2", display: "2"},
                            {value: "3", display: "3"},
                            {value: "4", display: "4"},
                            {value: "5+", display: "5+"},
                        ],
                        onChange: this.onChange,
                        onBlur: this.onBlur,
                        onFocus: this.onFocus                                     
                    },
                    registredInRki:{
                        name:"registredInRki",
                        value: "",
                        label: "Are you registered in RKI?",
                        valid: false,
                        touched: false,
                        selectOptions: [
                            {value: "yes", display: "Yes"},
                            {value: "no", display: "No"}
                        ],
                        onChange: this.onChange,
                        onBlur: this.onBlur,
                        onFocus: this.onFocus                                     
                    },
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
        updatedField.selected = false;

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

        updatedField.valid = true;
        updatedField.selected = true;

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

    isStepValid(){
        const updatedForm = Object.assign({}, this,this.state.formFields);        
        const updatedFormFields = updatedForm[this.state.currentStep];

        let isStepValid = true;

        for (let field in updatedFormFields) {
            let updatedField = updatedFormFields[field];
            if(updatedField.visable === false){
                continue;
            }
            updatedField.touched = true;
            updatedField.valid = Validate(updatedField.value, updatedField.validationRules);

            updatedFormFields[field] = updatedField;

            isStepValid = isStepValid && updatedField.valid;
        }

        this.setState({
            formFields: updatedForm
        });

        return isStepValid;
    }

    render(){
        const Steps = [ 
        <FirstStep {...this.state.formFields[0]} nextStep={() => this.nextStep()} isStepValid={() => this.isStepValid()}/>,
        <SecondStep {...this.state.formFields[1]} nextStep={() => this.nextStep()} previousStep={() => this.previousStep()} isStepValid={() => this.isStepValid()}/>,
        <ThirdStep {...this.state.formFields[2]} nextStep={() => this.nextStep()} previousStep={() => this.previousStep()} isStepValid={() => this.isStepValid()}/>
        ]

        return(
        <div>
            {Steps[this.state.currentStep]}
        </div>
        )
    }
}


export default Form
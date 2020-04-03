import React from 'react'

const CheckboxField = (props) =>{
    let isValid = !props.touched || props.valid;

    let inputClass = isValid ? "form-check-input" : "form-check-input invalid";
    let errorMessageClass = isValid ? "d-none" : "text-danger";


    return (
        <div className="form-check">
            <label className="form-check-label">
                <input type="checkbox" className={inputClass} name={props.name} 
                    onChange={props.onChange} onBlur={props.onBlur} value={props.value}/>
                {props.label}
            </label>
            <span className={errorMessageClass}>Checkbox is required!</span>
        </div>
    )
}

export default CheckboxField

// class CheckboxField extends React.Component{
//     constructor(props){
//         let isRequired = props.isRequired =='true' || false
//         let isValid = !isRequired
//         super(props);
//         this.state = {
//             value: props.defaultValue,
//             text: props.text,
//             isRequired: isRequired,
//             isValid: isValid
//         }
//     this.UpdateValue = this.UpdateValue.bind(this)
//     this.props.isValid(this.props.fieldID, isValid)
//     }

//     UpdateValue(e) {
//         let isValid = this.state.isRequired ? e.target.checked : true

//         this.setState({
//             value: e.target.checked,
//             isValid: isValid
//         })

//         this.props.isValid(this.props.fieldID, isValid)
//     }

//     render(){
//         let errorMessageClasses = 'd-none';

//         if(typeof this.state.value !== 'undefined'){
//             errorMessageClasses = this.state.isValid ? 'd-none' : 'text-danger'            
//         }

//         return (
//             <div className="form-check">
//                 <label className="form-check-label">
//                     <input className="form-check-input" onBlur={this.UpdateValue} onChange={this.UpdateValue} type="checkbox"  value={this.state.value}/>
//                     {this.state.text}
//                 </label>
//                 <span className={errorMessageClasses}>Checkbox is required!</span>
//             </div>
//         )
//     }
// }
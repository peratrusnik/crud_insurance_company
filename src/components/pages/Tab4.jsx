import React, {useState} from 'react';
import { FormErrors } from '../FormErrors';
  
export function Tab4({ formData, setFormData, handleSubmit }) {
  
  const [formState, setFormState] = useState({
    agentFirstName: '',
    agentLastName: '',
    agentEmail: '',
    agentPhone: '',
    agentTitle: '',
    formErrors: { agentFirstName: '', agentLastName: '', agentEmail: '', agentPhone:'', agentTitle:''},        
    agentFirstNameValid: false,
    agentLastNameValid: false,
    agentEmailValid: false,
    agentPhoneValid: false,
    agentTitleValid: false,
})
  const isValid = formState.agentFirstNameValid &&
    formState.agentLastNameValid &&
    formState.agentEmailValid &&
    formState.agentPhoneValid &&
    formState.agentTitleValid;
  
const handleUserInput = (e) => {
    let value = e.target.value
    let name = e.target.name
    setFormState({ [name]: value })
    validateField(name, value)
}
const validateField = (fieldName, value) => {
    
    let fieldValidationErrors = formState.formErrors;
    let agentFirstNameValid = formState.agentFirstNameValid;
    let agentLastNameValid = formState.agentLastNameValid;
    let agentEmailValid = formState.agentEmailValid;
    let agentPhoneValid = formState.agentPhoneValid;
    let agentTitleValid = formState.agentTitleValid;

switch (fieldName) {
    case 'aFirstName':
        agentFirstNameValid = value.length >= 3;
        fieldValidationErrors.agentFirstName = agentFirstNameValid ? '' : ' is required';
        break;
    case 'aLastName':
        agentLastNameValid = value.length >= 3;
        fieldValidationErrors.agentLastName = agentLastNameValid ? '' : ' is required';
        break;
    case 'aEmail':
        agentEmailValid = value.match(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/);
        fieldValidationErrors.agentEmail = agentEmailValid ? '' : ' is invalid!';
        break;
    case 'aPhone':
        agentPhoneValid = value.length >= 6;
        fieldValidationErrors.agentPhone = agentPhoneValid ? '' : ' is required';
        break;
    case 'aTitle':
        agentTitleValid = value.length != '';
        fieldValidationErrors.agentTitle = agentTitleValid ? '' : ' is required';
        break;
    default:
        break;        
}
    setFormState({
        ...formState,
        formErrors: fieldValidationErrors,
        agentFirstNameValid:agentFirstNameValid,
        agentLastNameValid: agentLastNameValid,
        agentEmailValid: agentEmailValid,
        agentPhoneValid: agentPhoneValid,
        agentTitleValid: agentTitleValid,
    })
  }

  
const errorClass = (error) => {
    return(error.length === 0 ? '' : 'has-error');
}
  
  return (  
    <div className='form-wrapper'>
      <div className="d-flex flex-column align-items-center">
        <select
            className={`${errorClass(formState.formErrors.agentTitle)}`}
            placeholder='Agent Title'
                value={formData.agentTitle}
          name='aTitle'
          autoFocus
            onChange={(e) => {
                setFormData({ ...formData, agentTitle: e.target.value })                     
                handleUserInput(e)
            }}
            onBlur={(e) => {                        
                handleUserInput(e)
    }}>
            <option defaultValue={''} value=""></option>
            <option value="Loss control consultant">Loss control consultant</option>
            <option value="Insurance field inspector">Insurance field inspector</option>
            <option value="Insurance underwriter">Insurance underwriter</option>
            <option value="Insurance investigator">Insurance investigator</option>
            <option value="Insurance claims clerk">Insurance claims clerk</option>
            <option value="Insurance sales agent">Insurance sales agent</option>
            <option value="Insurance appraiser">Insurance appraiser</option>
            <option value="Insurance broker">Insurance broker</option>
            <option value="Financial analyst">Financial analyst</option>
            <option value="Claims examiner">Claims examiner</option>
            <option value="Claims adjuster">Claims adjuster</option>
            <option value="Risk manager">Risk manager</option>
            <option value="Actuary">Actuary</option>
        </select>

        <input
            type="text"                 
            className={`${errorClass(formState.formErrors.agentFirstName)}`}
            placeholder='First Name'
            value={formData.agentFirstName}
            name='aFirstName'
            onChange={(e) => {
              setFormData({ ...formData, agentFirstName: e.target.value })                     
              handleUserInput(e)
            }}
            onBlur={(e) => {                        
              handleUserInput(e)
            }}
            />
        <input                
            type="text"
            className={` ${errorClass(formState.formErrors.agentLastName)}`}
            placeholder='Last Name'
            name='aLastName'
            value={formData.agentLastName}
            onChange={(e) => {
              setFormData({ ...formData, agentLastName: e.target.value })
              handleUserInput(e)
            }}
            onBlur={(e) => {
                handleUserInput(e)
              }}
        />
        <input                
            type="email"
            className={` ${errorClass(formState.formErrors.agentEmail)}`}
            placeholder='Email'
            name='aEmail'
            value={formData.agentEmail}
            onChange={(e) => {
              setFormData({ ...formData, agentEmail: e.target.value })
              handleUserInput(e)
            }}
            onBlur={(e) => {
              handleUserInput(e)
            }}
            />
        <input                
            type="number"
            className={` ${errorClass(formState.formErrors.agentPhone)}`}
            placeholder='Phone number'
            name='aPhone'
            value={formData.agentPhone}
            onChange={(e) => {
              setFormData({ ...formData, agentPhone: e.target.value })
              handleUserInput(e)
            }}
            onBlur={(e) => {
              handleUserInput(e)
            }}
        />
            
        <FormErrors formErrors={formState.formErrors} />
        <button id='continue' disabled={!isValid} onClick={handleSubmit}>CONTINUE</button>
      </div>
      </div>
      
  )
  
}

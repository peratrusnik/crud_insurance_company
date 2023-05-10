import React, { useState } from 'react';
import { FormErrors } from '../FormErrors';

export function Tab1({ formData, setFormData, handleSubmit }) {  

    const [formState, setFormState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        formErrors: { firstName: '', lastName: '', email: '', phone:''},        
        firstNameValid: false,
        lastNameValid: false,
        emailValid: false,
        phoneValid: false,
    })
    const isValid = formState.firstNameValid &&
        formState.lastNameValid &&
        formState.emailValid &&
        formState.phoneValid;
    
    const handleUserInput = (e) => {
        let value = e.target.value
        let name = e.target.name
        setFormState({ [name]: value })
        validateField(name, value)
    }
    const validateField = (fieldName, value) => {
        
        let fieldValidationErrors = formState.formErrors;
        let firstNameValid = formState.firstNameValid;
        let lastNameValid = formState.lastNameValid;
        let emailValid = formState.emailValid;
        let phoneValid = formState.phoneValid;

    switch (fieldName) {
        case 'firstName':
            firstNameValid = value.length >= 3;
            fieldValidationErrors.firstName = firstNameValid ? '' : ' is required';
            break;
        case 'lastName':
            lastNameValid = value.length >= 3;
            fieldValidationErrors.lastName = lastNameValid ? '' : ' is required';
            break;
        case 'email':
            emailValid = value.match(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/);
            fieldValidationErrors.email = emailValid ? '' : ' is invalid!';
            break;
        case 'phone':
            phoneValid = value.length >= 7;
            fieldValidationErrors.phone = phoneValid ? '' : ' is required';
            break;
        default:
            break;        
    }
        setFormState({
            ...formState,
            formErrors: fieldValidationErrors,
            firstNameValid: firstNameValid,
            lastNameValid: lastNameValid,
            emailValid: emailValid,
            phoneValid: phoneValid,
        })
    }      
    const errorClass = (error) => {
        return(error.length === 0 ? '' : 'has-error');
    }
    
    return (
        <div className='form-wrapper'>
            <div className="d-flex flex-column align-items-center">

                <input
                    type="text"                 
                    className={`${errorClass(formState.formErrors.firstName)}`}
                    placeholder='First Name'
                    value={formData.insurerFirstName}
                    name='firstName'
                    autoFocus
                    onChange={(e) => {
                        setFormData({ ...formData, insurerFirstName: e.target.value })                     
                        handleUserInput(e)
                    }}
                    onBlur={(e) => {                        
                        handleUserInput(e)
                    }}
                />
                <input                
                    type="text"
                    className={` ${errorClass(formState.formErrors.lastName)}`}
                    placeholder='Last Name'
                    name='lastName'
                    value={formData.insurerLastName}
                    onChange={(e) => {
                        setFormData({ ...formData, insurerLastName: e.target.value })
                        handleUserInput(e)
                    }}
                    onBlur={(e) => {
                        handleUserInput(e)
                    }}
                />
                <input                
                    type="email"
                    className={` ${errorClass(formState.formErrors.email)}`}
                    placeholder='Email'
                    name='email'
                    value={formData.insurerEmail}
                    onChange={(e) => {
                        setFormData({ ...formData, insurerEmail: e.target.value })
                        handleUserInput(e)
                    }}
                    onBlur={(e) => {
                        handleUserInput(e)
                    }}
                />
                <input                
                    type="number"
                    className={` ${errorClass(formState.formErrors.phone)}`}
                    placeholder='Phone number'
                    name='phone'
                    value={formData.insurerPhone}
                    onChange={(e) => {
                        setFormData({ ...formData, insurerPhone: e.target.value })
                        handleUserInput(e)
                    }}
                    onBlur={(e) => {
                        handleUserInput(e)
                    }}
                />
            </div>
            <FormErrors formErrors={formState.formErrors} />             
            <button id='continue' disabled={!isValid} onClick={handleSubmit}>CONTINUE</button>
        </div>
    );
}


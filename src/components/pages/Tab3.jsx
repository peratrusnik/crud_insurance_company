import React, {useEffect, useState} from 'react';
import {insurance, symbol} from '../../config/mock'
import { FormErrors } from '../FormErrors';

export function Tab3({ formData, setFormData, handleSubmit }) {   
    
    let isFormValid = false
    let isInputValid = false
    
    // form validation state
    const [formState, setFormState] = useState({
        estimatedPrice: '',
        coveragePrice: '',
        formErrors: { estimatedPrice: '', coveragePrice: '' },
        estimatedValid: false,
        coverageValid: false,
    })

    // form counting section
    const [coverage, setCoverage] = useState('')
    const [estimated, setEstimated] = useState('')
    const addCommas = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    const removeNonNumeric = num => num.toString().replace(/[^0-9]/g, '');
    
    const currentItem = formData.insuranceType
    const item = insurance.find((el)=> el.name === currentItem)
    const range = item.range
    const amountEst = parseInt(estimated.replaceAll(',', ''));
    const amountCov = parseInt(coverage.replaceAll(',', ''));
    const minPrice = item.priceLimit.min;
    const maxPrice = item.priceLimit.max;
    let maxCoverage = ''
    
    useEffect(() => {
        setFormData({ ...formData, coverageAmount: coverage })
    }, [coverage])
    useEffect(() => {        
        setFormData({ ...formData, estimatedAmount: estimated })
    }, [estimated])
    
    const handleUserInput = (e) => {
        let value = e.target.value
        let name = e.target.name
        setFormState({ [name]: value })
        validateField(name, value)
    }

    // check and validate fields
    const validateField = (fieldName, value) => {
        
        let fieldValidationErrors = formState.formErrors;
        let estimatedValid = formState.estimatedValid;
        let coverageValid = formState.coverageValid;
        switch (fieldName) {
            case 'estimated':
                estimatedValid = value.length >= 4;
                fieldValidationErrors.estimatedPrice = estimatedValid ? '' : ' is required';
                break;
            case 'coverage':
                coverageValid = value.length >= 4;
                fieldValidationErrors.coveragePrice = coverageValid ? '' : ' is required';
                break;
            default:
                break;
        }
        setFormState({
            ...formState,
            formErrors: fieldValidationErrors,
            estimatedValid: estimatedValid,
            coverageValid: coverageValid,
        })
    }
    // show error for input field
    const errorClass = (error) => {
        return (error.length === 0 ? '' : 'has-error');
    }
    const handleChangeEstAmount = e => {
        setEstimated(addCommas(removeNonNumeric(e.target.value)));
    }  
    const handleChangeCovAmount = e => {
        setCoverage(addCommas(removeNonNumeric(e.target.value)));
    }
    
    // check amount in range
    let between = (x, min, max)=> {
        return x >= min && x <= max;
    }
    if (between(amountEst, minPrice, maxPrice)) {
        maxCoverage = 
        minPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        + ' - ' +
        amountEst.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        isInputValid = true        
    }
    if (between(amountCov, minPrice, amountEst)) {
        isFormValid = true        
    } 
    
    // cut user inputs on event
    const handleSlice = (e) => {    
        let x = maxPrice.toString().length + 1
        e.target.value = e.target.value.slice(0, x)         
    }

    return (
        <div className="form-wrapper">
                <input
                    className={`${errorClass(formState.formErrors.estimatedPrice)}`}
                    type="tel"
                    name='estimated'
                    placeholder={'Estimated: ' + range}
                    value={estimated}               
                    autoFocus
                    onInput={(e) => {
                        handleSlice(e)        
                    }}         
                    onChange={(e) => {
                        handleUserInput(e)
                        handleChangeEstAmount(e)                            
                    }}
                    onBlur={(e) => {                        
                        handleUserInput(e)
                    }}    
                
                /><span className='symbol'>{symbol}</span><br />
                <input
                    className={`${errorClass(formState.formErrors.coveragePrice)}`}
                    type="tel"
                    name='coverage'                  
                    placeholder={maxCoverage? 'Coverage: ' + maxCoverage : 'Coverage: ' + range}
                    value={coverage}
                    disabled={!isInputValid}                               
                    onInput={(e) => {
                        handleSlice(e)         
                    }}                            
                    onChange={(e) => {
                    handleUserInput(e)
                    handleChangeCovAmount(e)                    
                    }}                
                    onBlur={(e) => {                        
                        handleUserInput(e)
                    }}                
            /><span className='symbol'>{symbol}</span><br />
            <FormErrors formErrors={formState.formErrors} />
            <button id='continue' disabled={!isFormValid}   onClick={handleSubmit}>CONTINUE</button>
        </div>
    )
}

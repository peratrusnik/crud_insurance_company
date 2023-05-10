import React,{useState} from 'react';
import { FormErrors } from '../FormErrors';
import { carInsurance, insurance } from '../../config/mock';
import {TiTick} from 'react-icons/ti'
import {ImCheckboxChecked} from 'react-icons/im'

export function Tab2({ formData, setFormData, handleSubmit }) {

    const [formState, setFormState] = useState({
        item: '',
        formErrors: { item: '' },
        itemValid: false,
    })

    const isValid = formState.itemValid;

    const handleUserInput = (e) => {
        let value = e.target.value
        let name = e.target.name
        setFormState({ [name]: value })
        validateField(name, value)
    }
    const validateField = (fieldName, value) => {
        
        let fieldValidationErrors = formState.formErrors;
        let itemValid = formState.itemValid;
        switch (fieldName) {
            case 'item':
                itemValid = value.length != '';
                fieldValidationErrors.item = itemValid ? '' : ' is required';
                break;
            default:
                break;
        }
        setFormState({
            ...formState,
            formErrors: fieldValidationErrors,
            itemValid: itemValid,
        })
    }
    const errorClass = (error) => {
        return (error.length === 0 ? '' : 'has-error');
    }    
        
    const currentItem = formData.insuranceType
    const item = insurance.filter((ins) => ins.name === currentItem)
    let listofItems = []
        item.map((element) => 
        listofItems = element.coverage)
    let listItem = listofItems.map((el, index) => <li key={index} className='m-1'><ImCheckboxChecked/> {el}</li>)
    
    return (
        <div className="form-wrapper">
            <select
                className={`${errorClass(formState.formErrors.item)}`}
                placeholder='Insurance Type'
                    value={formData.insuranceType}
                    name='item'
                autoFocus
                onChange={(e) => {
                    setFormData({ ...formData, insuranceType: e.target.value })                     
                    handleUserInput(e)
                }}
                onBlur={(e) => {                        
                    handleUserInput(e)
                }}>
                <option defaultValue={''} value=""></option>
                <option value="car">Car insurance</option>
                <option value="house">House insurance</option>
                <option value="health">Health insurance</option>
                <option value="life">Life insurance</option>
                <option value="travel">Travel insurance</option>
                <option value="jewelry">Jewelry insurance</option>
                <option value="business">Bussiness insurance</option>
            </select>
            <div className='info d-flex justify-content-center'>
                <ul className=''>{listItem}</ul>                
              
            </div>
            <FormErrors formErrors={formState.formErrors} />
            <button id='continue' disabled={!isValid} onClick={handleSubmit}>CONTINUE</button>
        </div>
    );
    
}

import React, { useEffect, useState } from 'react';
import { Tab1 } from './pages/Tab1';
import { Tab2 } from './pages/Tab2';
import { Tab3 } from './pages/Tab3';
import { Tab4 } from './pages/Tab4';
import { useDispatch } from 'react-redux';
import { addPolicy} from '../redux/table.slicer';
import { useNavigate } from 'react-router-dom';
import { nanoid } from 'nanoid';
import ProgressInfoBar from './ProgressInfoBar';

function UserForm() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [page, setPage] = useState(0);    
    const today = new Date();
    const date = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
    const [formData, setFormData] = useState({
        id: nanoid(),
        date: date,
        insurerFirstName: '',
        insurerLastName: '',
        insurerEmail: '',
        insurerPhone: '',        
        agentFirstName: '',
        agentLastName: '',
        agentEmail: '',
        agentPhone: '',
        agentTitle: '',
        insuranceType: '',
        estimatedAmount: '',
        coverageAmount: '',
    });

    const conditionalComponent = () => {
        switch (page) {
            case 0:
                return <Tab1 formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} />;           
            case 1:
                return <Tab2 formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} />;
            case 2:
                return <Tab3 formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} />;
            case 3:
                return <Tab4 formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} />;               
        }
    } 
    const FormTitles = ["Insurer Details:", "Item Details:", "Coverage Details:", "Agent Details:"];           
                
    function handleSubmit () {
        setPage(page + 1);
        
        if (page === FormTitles.length - 1) {
            dispatch(addPolicy(formData))
            navigate('/')
        }
    }     
                
    return (
        <div className='form'>
            <div className="container">
                <ProgressInfoBar page={page} formData={formData} />
                <div className="formHolder col-6 m-0 m-auto">
                <p className='progressLineTitle'>{FormTitles[page]}</p>
                {conditionalComponent()}
                </div>
            </div>
        </div>

    );
}

export default UserForm;
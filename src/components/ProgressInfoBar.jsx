import React from 'react';
import { RiArrowDownSFill } from 'react-icons/ri'
import { symbol } from '../config/mock';

function ProgressInfoBar({page, formData}) {
    return (
        <div className="progressLine">
            <div className="progressbar">
                <div style={{
                     width: page === 0 ? '25%' : page == 1 ? '50%' : page == 2 ? '75%' : '100%'
                 }} >
                     </div>
            </div>
            <div className="progressInfoBar d-flex justify-content-around mb-3">
                <ul className="itemsData">                    
                    <RiArrowDownSFill className='arrow'/>
                <li className='infoBarTitle'>Insurer Details:</li>
                <li>{formData.insurerFirstName+" "+formData.insurerLastName}</li>
                <li>{formData.insurerEmail}</li>
                <li>{formData.insurerPhone}</li>          
            </ul>    
                       
                <ul className="itemsData">
                <RiArrowDownSFill className='arrow'/>
                    <li className='infoBarTitle'>Insurance Type:</li>
                    <li className='customS'>{formData.insuranceType && formData.insuranceType.toUpperCase()}</li>          
            </ul>    
                <ul className="itemsData">
                <RiArrowDownSFill className='arrow'/>
                    <li className='infoBarTitle mb-2'>Coverage Details:</li>
                    
                    { formData.estimatedAmount &&   
                        <li>Estimated: {formData.estimatedAmount} {symbol}</li>
                    }  
                    {
                     formData.coverageAmount &&   
                        <li>Coverage: {formData.coverageAmount} {symbol}</li>
                    }        
                </ul>    
                <ul className="itemsData">
                <RiArrowDownSFill className='arrow'/>
                    <li className='infoBarTitle'>Agent Details:</li>
                <li>{formData.agentFirstName+" "}{formData.agentLastName}</li>
                <li>{formData.agentEmail}</li>
                <li>{formData.agentPhone}</li>          
                <li>{formData.agentTitle}</li>          
            </ul>    
            </div>
        </div>
    );
}

export default ProgressInfoBar;
import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { symbol } from '../config/mock';

function Update() {
    const users = useSelector((state) => state.policies)
    const { id } = useParams()
    const currentUser = users.policiesItems.filter((item) => item.id === id)
    
    return (
        <div>
            {currentUser.map((user, index) => {
                return <div key={index}>
                    <div className="container">

                    <div className="gridContainer">
                        <div className="insurerInfo gridItem">
                            <h4>Insurer Details:</h4>
                            <ul className='list p-0 m-4'>
                                <label>First name</label>
                                <li>{user.insurerFirstName}</li>
                                <label>Last name</label>
                                <li>{user.insurerLastName}</li>
                                <label>Email</label>
                                <li>{user.insurerEmail}</li>
                                <label>Phone</label>
                                <li>{user.insurerPhone}</li>
                            </ul>
                        </div>
                        <div className="agentInfo gridItem">
                            <h4>Agent Details:</h4>
                            <ul className='list p-0 m-4'>
                                <label>First name</label>
                                <li>{user.agentFirstName}</li>
                                <label>Last name</label>
                                <li>{user.agentLastName}</li>
                                <label>Email</label>
                                <li>{user.agentEmail}</li>
                                <label>phone</label>
                                <li>{user.agentPhone}</li>
                                <label>Agent title</label>
                                <li>{user.agentTitle}</li>
                            </ul>
                            <Link className='btn btn-success mt-3' to={'/'}>BACK</Link>
                        </div>
                        <div className="insuranceInfo gridItem">
                            <h4>Insurance Details</h4>
                            <ul className='list p-0 m-4'>
                                <label>Created at</label>
                                <li>{user.date}</li>
                                <label>Type of insurance</label>
                                <li>{user.insuranceType.toUpperCase()}</li>
                                <label>Estimated price</label>
                                <li>{user.estimatedAmount} {symbol}</li>
                                <label>Amount of coverage</label>
                                <li>{user.coverageAmount} {symbol}</li>
                            </ul>
                        </div>                            
                                          
                    </div>
                </div>
                </div>
            })}
             
        </div>
    );
}

export default Update;
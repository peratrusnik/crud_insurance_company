import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deletePolicy } from '../redux/table.slicer';
import { symbol } from '../config/mock';
import {CiRead} from 'react-icons/ci' 
import { BsTrash3Fill } from 'react-icons/bs' 
import { ReactComponent as NoData } from '../assets/no-data-icon.svg'

function Records ({ data, query }) {
    const dispatch = useDispatch();
    const logoSize = { width: "60px", height: "60px" };
    
    return (
        <div className="tableWrapper">

        <table className="table table-striped">
        <thead>
            <tr>
                <th scope="col">Created</th>
                <th scope="col">Requester</th>
                <th scope="col">Agent</th>
                <th scope="col">Insurance type</th>
                <th scope="col">Price</th>
                <th scope="col">Action</th>
            </tr>
        </thead>
            <tbody> 
            {data != ''  ?    
                data.map((user, index) => {
                    return <tr key={index}>
                        <td>{user.date}</td>
                        <td>{user.insurerFirstName} {user.insurerLastName}</td>
                        <td>{user.agentFirstName} {user.agentLastName}</td>
                        <td>{user.insuranceType.toUpperCase()}</td>
                        <td>{user.coverageAmount} {symbol}</td>
                        <td>
                        <Link className='btnView' title='View' to={`/view/${user.id}`}><CiRead/></Link>
                       <span title='Remove' onClick={() => {if (window.confirm(`\nAre you sure you want to remove this record ?\n\n Requester: \t ${user.insurerFirstName } ${user.insurerLastName } \n Type of insurance: \t ${user.insuranceType.toUpperCase()} \n Price: \t ${user.coverageAmount} € \n Created at: \t ${user.date}`)) dispatch(deletePolicy({ id: user.id }))
                       }}
                       className='btnDelete'
                       ><BsTrash3Fill/></span>
                    </td>
                    </tr>
                })
                :
                <tr>
                    <td colSpan={6}>
                        <p className='fs-5 p-5'>
                            <NoData
                                className='m-4'
                                width={logoSize.width}
                                height={logoSize.height}
                                    /> No records in database{!query && '...'} {query && 'for: '}<span className='query'>{ query  }</span> !
                                    
                        </p>
                    </td>                    
                </tr>
                }
            </tbody>  

        </table>
    </div>
    ) 
  }

export default Records;
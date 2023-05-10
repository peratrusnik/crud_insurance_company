import React, { useEffect, useMemo, useReducer, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Records from './Records';
import Pagination from './Pagination';
import Search from './Search';

function Table() {
    
    const [currentPage, setCurrentPage] = useState(1)
    const [recordsPerPage] = useState(5);
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage; 
    const [query, setQuery] = useState('') 
    
    const policies = useSelector((state) => state.policies)
    const sortPolicy = [...policies.policiesItems];
    const db = sortPolicy.sort((a, b) => (a < b ? 1 : - 1))    
 
    const [copyData, setCopyData] = useState(db) 
    const [data, setData] = useState('')
    let nPages = Math.ceil(copyData.length / recordsPerPage)     

    useEffect(() => {
        setCopyData(db)
    },[db.length])

    useEffect(() => {
        setData(copyData.slice(indexOfFirstRecord, indexOfLastRecord))              
    }, [copyData, currentPage])
    
    return (       
            
        <div className="mainTableWrapper container d-flex justify-content-center">
            <div className="col-10 mt-5">
                <div className="createSearchWrapper mb-4">                
                    <Link to='/create' className='btn btn-success btnCreate'>CREATE POLICY</Link>
                    <Search      
                        db={db}
                        query={query}
                        setQuery={setQuery}
                        setCopyData={setCopyData}
                        setCurrentPage={setCurrentPage}
                    />
                </div>     
                <Records data={data} query={query} />      
                <Pagination
                    nPages={nPages}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </div>
        </div>       
    );
}

export default Table;
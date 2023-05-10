import React, {useState} from 'react';
import { BiSearchAlt } from 'react-icons/bi'

function Search({
    db,
    query,
    setQuery,
    setCopyData,
    setCurrentPage
}) {    

    const items = [...db]
    let queries = query.toLowerCase()
    
    const handleSearch = (e) => {
        if (e.key === 'Enter' || e === 'Go') {
            if (query.length >= 3) {
                let filtered = items.filter((el) =>
                    el.insurerFirstName.toLowerCase().match(queries) ||
                    el.insurerLastName.toLowerCase().match(queries) ||
                    el.agentFirstName.toLowerCase().match(queries) ||
                    el.agentLastName.toLowerCase().match(queries) ||
                    el.insuranceType.toLowerCase().match(queries)
                )

                setCurrentPage(1)
                setCopyData(filtered)
                
            } 
            if (query.length == '') {
                setCurrentPage(1)
                setCopyData(db)
            }
        } 
    }
        
    return (
        <div>        
            <div className="searchPanel">
                
                <input
                    className="searchItem"
                    type="text"
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder='Search'
                    onKeyUp={(e) => handleSearch(e)}
                />
                <button
                    className='searchBtn'
                    name='submit'
                    onClick={()=>handleSearch('Go')}
                >
                    <BiSearchAlt />
                </button>
             </div>        
        </div>
    );
}

export default Search;
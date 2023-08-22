import React, { useState } from 'react'
import * as io from 'react-icons/io5'
import { Link } from 'react-router-dom';

import './Searchbar.css';

const Searchbar = ({placeholder, data, setCompany}) => {
    const [ dataFilter, setDataFilter ] = useState([]);
    const [ search, setSearch ] = useState('');

    const handleSearch = (e) => {
        const searchWord = e.target.value; 
        setSearch(searchWord); 

        const newFilter = data.filter((value) => { 
            return value.Name.toLowerCase().includes(searchWord.toLowerCase());
        });

        if (searchWord === "") {
            setDataFilter([]);
        } else { 
            setDataFilter(newFilter);
        }
    }
    const handleSelected = (value) => { 
        setSearch(value.Name);
        const newFilter = data.filter((value) => { 
            return value.Name.toLowerCase().includes(search.toLowerCase());
        });
        setDataFilter(newFilter);
        console.log(newFilter);
    }

    const handleGetCompany = (value) => { 
        handleClear();
        setCompany(value[0]);
    }

    const handleKeyPress = (e) => { 
        const keyPressed = e.key; 
        if (keyPressed === "Enter" ) {
            handleClear(); 
            return dataFilter

        }
    }

    const handleClear = () => { 
        setDataFilter([]);
        setSearch('')
    }

  return (
    <div className="company-content">
        <aside className="search-col col">
            <div className="search searchBarLeft">
                <div className="searchInput">
                    <input type='text'
                        name='company'
                        value={search}
                        placeholder={placeholder}
                        onChange={handleSearch}
                        onKeyDown={handleKeyPress}
                        /> 
                    <div className="searchIcon">
                        { search.length === 0 ? (
                            <io.IoSearchOutline size={"30"} />
                        ) : (
                            dataFilter.length === 0 ? (    
                                <io.IoAdd color='white' />   
                            ) : (
                                <io.IoInformation onClick={() => handleGetCompany(dataFilter[0])} />   
                            )
                        )}
                    </div>    
                    { search.length >= 3 && dataFilter.length != 0 && (           
                    <div className="dataResult">
                        {dataFilter.map((value, key) => {
                            return <a key={value.id} 
                                      className='dataItem' 
                                      onClick={() => handleGetCompany(value)}
                                    >
                                        <p >{value.Name}</p>
                                    </a>
                        })}
                    </div>
                )}
                </div>
            </div>
        </aside>
    </div>
  )
}

export default Searchbar

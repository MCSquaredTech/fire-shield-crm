import React, { useState } from 'react'
import * as io from 'react-icons/io5'
import { Link } from 'react-router-dom';

import './Searchbar.css';

const Searchbar = ({placeholder, data}) => {
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

    const handleKeyPress = (e) => { 
        const keyPressed = e.key; 
        if (keyPressed === "Enter" ) {
            handleClear(); 
            return dataFilter

        }
    }

    const handleAdd = () => { 
        console.log("here!");
        return <Link to="/companies/new" state={search} />
    }

    const handleClear = () => { 
        setDataFilter([]);
        setSearch('')
    }

  return (
    <div className="company-content">
        <aside className="search-col">
            <div className="search">
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
                                <Link to="new"><io.IoAdd size={"30"} /></Link>    
                            ) : (
                                <Link className=":id/company"><io.IoInformation size={"30"} /></Link>    
                            )
                        )}
                    </div>    
                    { search.length >= 3 && dataFilter.length != 0 && (           
                    <div className="dataResult">
                        {dataFilter.map((value, key) => {
                            return <a key={value.id} 
                                      href={"#"} 
                                      className='dataItem' 
                                      onClick={() => handleSelected(value)}
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

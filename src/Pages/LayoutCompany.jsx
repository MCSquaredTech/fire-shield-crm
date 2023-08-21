import { useState } from 'react';
import Searchbar from "../Components/AutofillSearchbar/Searchbar"

import './Layout.css'
import Company from "../Components/Company/Company";

const LayoutCompany = ({placeholder, data}) => {
const [company, setCompany] = useState({});

  return (
    <div style={{height: "calc(100vh - 60px)", weight: "calc(100vw - 250px)"}}> 
        <h2>Company</h2>
        <div style={{width: "1020px"}}>
        <Searchbar placeholder={placeholder} data={data} setCompany={setCompany} />
        </div>
       <Company company={company}/>
    </div>
  )
}

export default LayoutCompany

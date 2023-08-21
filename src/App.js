import React, { useState, useEffect } from 'react';
import { RouterProvider,
  Router, 
  createBrowserRouter,
  createRoutesFromElements,
  Route} from "react-router-dom";
import Layout from "./Pages/Layout";
import LayoutCompany from "./Pages/LayoutCompany"; 

import Sales from "./Pages/Sales"; 
import Support from "./Pages/Support"; 
import Home from "./Pages/Home";

import { CompanyDataSourceAPI } from './DataSource/CompanyDataProvider';
import './App.css';



function App() {
  const [ company, setCompany ] = useState([])

  const getCompany = async () => { 
    setCompany(await CompanyDataSourceAPI.getCompany());
  }

  useEffect(() =>{ 
    // Companies DataSource - 
      getCompany();  
    },[]);

  const router = createBrowserRouter(
    createRoutesFromElements( 
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="company" element={<LayoutCompany 
            placeholder="Company Search..."  data={company} />} />
        <Route path="sales" element={<Sales />} />
        <Route path="support" element={<Support />} />
      </Route>
  
    )
  )

  return (
   <RouterProvider router={router} companyData={company}/>
  );
}

export default App;

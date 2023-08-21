import { RouterProvider,
  Router, 
  createBrowserRouter,
  createRoutesFromElements,
  Route} from "react-router-dom";
import Layout from "./Pages/Layout";
import LayoutCompany from "./Pages/LayoutCompany"; 

import CompanyDetail from "./Pages/CompanyDetails";
import CompanyNew from "./Pages/CompanyNew"; 
import CompanySearch from "./Pages/CompanySearch";

import Sales from "./Pages/Sales"; 
import Support from "./Pages/Support"; 
import Home from "./Pages/Home";

import './App.css';


const router = createBrowserRouter(
  createRoutesFromElements( 
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="company" element={<LayoutCompany />} >
        <Route path="search" element={<CompanySearch />} /> 
        <Route path="new" element={<CompanyNew />} /> 
        <Route path="detail" element={<CompanyDetail />} />
      </Route>
      <Route path="sales" element={<Sales />} />
      <Route path="support" element={<Support />} />
    </Route>

  )
)
function App() {
  return (
   <RouterProvider router={router} />
  );
}

export default App;

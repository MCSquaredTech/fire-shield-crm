// import './Layout.css'; 

import Header from '../Components/Header/Header';
import Sidebar from '../Components/Sidebar/Sidebar';
import Footer from '../Components/Footer/Footer';
import { Outlet } from 'react-router-dom';


const Layout = () => {
  return (
    <container>
      <div className="row">
        <div className="col-md-10">
          <Header />
        </div>
      </div>
      <div className="row">
        <div className="col-md-auto">
          <Sidebar />
        </div>
        <div className='col-md-10'>
          <Outlet />
          <Footer /> 
        </div>
      </div>
        
        
        
    </container>
  )
}

export default Layout;

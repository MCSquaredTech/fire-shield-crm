import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as faIcons from 'react-icons/fa'; 
import * as bsIcons from 'react-icons/bs';
import * as riIcons from 'react-icons/ri';
import * as aiIcons from 'react-icons/ai';
import { 
  Sidebar, 
  Menu, 
  MenuItem, 
} from 'react-pro-sidebar';

import './Sidebar.css';

// https://codesandbox.io/s/react-sidebar-routing-boj4c?file=/src/components/Sidebar.js


const LeftSidebar = () => {
  const [ collapsed, setCollapsed ] = useState(false); 
  const [ toggled, setToggled ] = useState(false);
  const [ menuActive, setMenuActive ] = useState('Dashboard')

  const handleCollapsed = () => { 
    setCollapsed(!collapsed);
  }

  const handleToggled = () => { 
    setToggled(!toggled);
  }

  return (
    <Sidebar 
      className='sidebar'
      collapsed={collapsed}
      toggled={toggled}
      onToggle={handleToggled}
      onChange={handleCollapsed}
      breakPoint="md" 
      backgroundColor='#222'
      >    
      <Menu
        className='sidebar-menu'>
        {/* ProSidebar Header */}
        <div 
          className='sidebar-header'
          >{menuActive}
        </div>
        <MenuItem className='sidebar-menuitem'
          icon={<aiIcons.AiFillDashboard size={"20px"}/>}
          component={<Link to="/"  />}
          onClick={() => setMenuActive('Home')}
          >Dashboard</MenuItem>
        <MenuItem className='sidebar-menuitem'
          icon={<bsIcons.BsBuildingFill size={"20px"}/>}
          component={<Link to="company"  />}
          onClick={() => setMenuActive('Company')}
          >Company</MenuItem>
        <MenuItem className='sidebar-menuitem'
          icon={<riIcons.RiContactsFill size={"20px"}/>}
          component={<Link to="/sales" />} 
          onClick={() => setMenuActive('Sales')}
          >Sales</MenuItem>
        <MenuItem className='sidebar-menuitem'
          icon={<faIcons.FaRegIdBadge size={"20px"}/>}
          component={<Link to="/support" />} 
          >Support</MenuItem>
      </Menu>
    </Sidebar>
  )
}

export default LeftSidebar;
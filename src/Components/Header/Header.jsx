import React from 'react';

import './Header.css'; 

import { Navbar, Nav } from 'react-bootstrap';
import * as biIcons from 'react-icons/bi';
import * as giIcons from 'react-icons/gi';

const Header = () => {
  return (
    <div className='header'>
      <Navbar bg='dark' variant='dark' expand="lg" className='justify-content-start'>
        <Navbar.Brand href="#"><h5><giIcons.GiFireShield size={'35px'}/>Fire Shield B2B CRM</h5></Navbar.Brand>
      </Navbar>
      <Navbar bg='dark' variant='dark'>
        <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mr-auto my-4 my-md-0 justify-content-center"
              style={{ maxHeight: '60px' }}
              navbarScroll
            >
              <Nav.Link href="#action1"><biIcons.BiLogInCircle /></Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    </div>
  )
}

export default Header
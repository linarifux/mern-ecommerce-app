import React from 'react'
import MyLogo from '../assets/logo.png'
import { BsCart, BsPerson } from 'react-icons/bs'
import { RiArrowDownSFill} from 'react-icons/ri'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';

const Mynav = () => {
  return (
    <Navbar bg="light" expand="lg" sticky='top'>
      <Container>
        <Navbar.Brand href="#home"><img className='logo' src={MyLogo} alt="Logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-5">
            <Nav.Link><Link to={'/'} style={{ color: 'inherit' }}>HOME</Link></Nav.Link>
            <Nav.Link><Link to={'/shop-all'} style={{ color: 'inherit' }}>SHOP ALL</Link></Nav.Link>
            <Nav.Link><Link to={'/apparel'} style={{ color: 'inherit' }}>APPAREL</Link></Nav.Link>
            <Nav.Link><Link to={'/accessories'} style={{ color: 'inherit' }}>ACCESSORIES</Link></Nav.Link>
            <Nav.Link><Link to={'/footwear'} style={{ color: 'inherit' }}>FOOTWEAR</Link></Nav.Link>
            <NavDropdown title={<BsPerson className='cart'/>}>
              <NavDropdown.Item><Link to={'/login'} style={{ color: 'inherit' }}>Login</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to={'/signup'} style={{ color: 'inherit' }}>Signup</Link></NavDropdown.Item>
            </NavDropdown>
            <Nav.Link><BsCart className='cart' /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Mynav
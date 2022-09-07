import React from 'react'
import MyLogo from '../assets/logo.png'
import { BsCart, BsPerson } from 'react-icons/bs'
import { RiArrowDownSFill } from 'react-icons/ri'

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
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/shop-all'>SHOP ALL</Nav.Link>
            <Nav.Link as={Link} to='/apparel'>APPAREL</Nav.Link>
            <Nav.Link as={Link} to='/accessories'>ACCESSORIES</Nav.Link>
            <Nav.Link as={Link} to='/footwear'>FOOTWEAR</Nav.Link>
            <Nav.Link as={Link} to='/gadgets'>GADGETS</Nav.Link>
            <NavDropdown title={<BsPerson className='cart' />}>
              <NavDropdown.Item as={Link} to='/login'>Login</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/signup' >Signup</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link><BsCart className='cart' /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Mynav
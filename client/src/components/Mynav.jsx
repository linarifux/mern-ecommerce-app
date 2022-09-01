import React from 'react'
import MyLogo from '../assets/logo.png'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Mynav = () => {
  return (
    <Navbar bg="light" expand="lg" sticky='top'>
      <Container>
        <Navbar.Brand href="#home"><img className='logo' src={MyLogo} alt="Logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-5">
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#link">SHOP ALL</Nav.Link>
            <Nav.Link href="#link">APPAREL</Nav.Link>
            <Nav.Link href="#link">ACCESSORIES</Nav.Link>
            <Nav.Link href="#link">FOOTWEAR</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Mynav
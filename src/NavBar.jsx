import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" className="me-auto" style={{ fontSize: '24px' }}>HearMe</Navbar.Brand> 
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="home" style={{ fontSize: '18px' }}>Home</Nav.Link>
            <Nav.Link href="/AboutUs" style={{ fontSize: '18px' }}>About Us</Nav.Link>
            <Nav.Link href="/contactus" style={{ fontSize: '18px' }}>Contact</Nav.Link>
            <Nav.Link href="/services" style={{ fontSize: '18px' }}>Services</Nav.Link>
          </Nav>
          {/* Add Login to the rightmost part */}
          <Nav className="ms-3">
            <Nav.Link href="#login" style={{ fontSize: '18px' }}>Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

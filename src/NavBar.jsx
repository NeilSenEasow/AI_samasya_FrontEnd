import React from "react";
import { Link } from "react-router-dom";  
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/" className="me-auto" style={{ fontSize: '24px' }}>HearMe</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" style={{ fontSize: '18px' }}>Home</Nav.Link>  {/* Link to Home.jsx */}
            <Nav.Link as={Link} to="#aboutus" style={{ fontSize: '18px' }}>About Us</Nav.Link>
            <Nav.Link as={Link} to="#contactus" style={{ fontSize: '18px' }}>Contact</Nav.Link>
            <Nav.Link as={Link} to="#services" style={{ fontSize: '18px' }}>Services</Nav.Link>
          </Nav>
          {/* Add Login to the rightmost part */}
          <Nav className="ms-3">
            <Nav.Link as={Link} to="#login" style={{ fontSize: '18px' }}>Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

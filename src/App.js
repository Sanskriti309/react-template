import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from "react-bootstrap/Image";
import Services from './components/dummy';


function App() {
  const [expanded, setExpanded] = useState(false);

  const handleNavbarToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="App">
      <Navbar expand="lg" className="navbar p-2 bg-dark ">
        <Navbar.Brand href="#">
          <Image src={"./image (1).png" } className="align-top img-fluid ms-3 navlogo" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbarScroll"
          onClick={handleNavbarToggle}
          className='navbarToggle'
          style={{color:"white"}}
        >
          {expanded ? (
            <span>&times;</span> // &times; is the HTML entity for the multiplication (X) symbol
          ) : (
            <span>&#9776;</span> // &#9776; is the HTML entity for the hamburger menu symbol
          )}
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarScroll" className= {expanded ? 'show' : ''}>
          <Nav className="ms-auto mb-2 mb-lg-0" style={{ textAlign: 'left' }}>
            <Nav.Link href="#" className="nav me-5">
              Home
            </Nav.Link>
            <Nav.Link href="#" className="nav me-5">
              Services
            </Nav.Link>
            <Nav.Link href="#" className="nav me-5">
              Training
            </Nav.Link>
            <Nav.Link href="#" className="nav me-5">
              Contact Us
            </Nav.Link>
            <Button variant="" className="techpath ms-2 me-5">
              Contact Us
            </Button>{' '}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Services/>
      {/* <ServicesComponent /> */}
    </div>
  );
}

export default App;

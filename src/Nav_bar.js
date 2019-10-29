import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function Nav_bar() {
  return (  
    <div>
      <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#HOME">Adam Capdeville</Nav.Link>
            <Nav.Link href="portfolio">Portfolio</Nav.Link>
            <Nav.Link href="blog">Blog</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </>
    </div>
  );
}

export default Nav_bar;

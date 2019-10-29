import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function Nav_bar() {
  return (  
    <div>
      <Navbar bg="dark" expand="lg">
        <Navbar.Brand href="AGCapdeville.github.io">Adam Capdeville</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="AGCapdeville.github.io">Adam Capdeville</Nav.Link>
            <Nav.Link href="AGCapdeville.github.io\portfolio">Portfolio</Nav.Link>
            <Nav.Link href="AGCapdeville.github.io\blog">Blog</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Nav_bar;

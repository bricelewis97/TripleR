import React from "react";
import {
    BrowserRouter as Router, // we are aliasing this module for a cleaner call

    Link
    // etc.
  } from 'react-router-dom';
  import { Navbar, Nav, NavDropdown} from "react-bootstrap";

class NavBar extends React.Component {
    render(){
      return(
      <div>
         <Router>
           <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
           <Navbar.Brand href="/">Triple R Resturant</Navbar.Brand>
           <Navbar.Toggle aria-controls="responsive-navbar-nav" />
             <Navbar.Collapse id="responsive-navbar-nav">
           <Nav className="mr-auto">
           <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/aboutus">About Us</Nav.Link>
          <NavDropdown title="Menu" href="/menu" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/lazyloading" >Lazy Loading</NavDropdown.Item>
            <NavDropdown.Item href="/drm">DRM</NavDropdown.Item>
            <NavDropdown.Item href="lth">LTH</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="nutrtionalfacts">Nutrional Facts</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="/deets">More deets</Nav.Link>
          <Nav.Link eventKey={2} href="/memes">
            Dank memes
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
     </Navbar>
      </Router>

        <div className="nav">  
      </div>
      </div>
      )

    }

}


export default NavBar
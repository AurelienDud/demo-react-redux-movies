import React, { FunctionComponent } from "react"
import { Link } from "react-router-dom"
import { Navbar, Nav, Container } from 'react-bootstrap'
import image from '@src/assets/images/favicon.svg'


/**
 * HEADER COMPONENT
 */
const Header:FunctionComponent = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        {/* Logo and home link */}
        <Navbar.Brand as="div">
          <Link to='/'>
            <img
              src={image}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Logo"
            />
          </Link>
        </Navbar.Brand>

        {/* Menu button */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Menu items */}
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
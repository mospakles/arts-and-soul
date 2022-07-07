import React from 'react'
import { Link } from 'react-router-dom';
import './NavBar.css'
import { Container, Nav, Navbar } from 'react-bootstrap'
const NavBar = () => {
  return (
    <Navbar bg="dark" variant={'dark'} expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"><h1  id='navbar-text'>Arts and Soul</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="aboutus">AboutUs</Nav.Link>
            <Nav.Link href="collections">Collections</Nav.Link>
            <Nav.Link href="artists">Artists</Nav.Link>
            <Nav.Link href="explore">Explore</Nav.Link>
          </Nav>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="How can we help you?"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar


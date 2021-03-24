import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

export const HeaderComponent = () => {
    return (
    <header>        
        <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
        <Container>
        <Navbar.Brand href="/">Tech Assault</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/cart"><i className='pr-2 fas fa-shopping-cart'></i>Cart</Nav.Link>
            <Nav.Link href="/login"><i className='pr-2 fas fa-user'></i>Sign In</Nav.Link>            
          </Nav>         
        </Navbar.Collapse>
        </Container>
      </Navbar>        
    </header>
    );
}
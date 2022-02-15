import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export const Menu = () => {
  return (
    <Navbar bg='dark' variant='dark'>
      <Container>
        <LinkContainer to='signup'>
          <Navbar.Brand>Expense</Navbar.Brand>
        </LinkContainer>

        <Nav className='ml-auto'>
          <LinkContainer to='expense'>
            <Nav.Link>Add Expense</Nav.Link>
          </LinkContainer>

          <LinkContainer to='signup'>
            <Nav.Link>SignUp</Nav.Link>
          </LinkContainer>
        </Nav>
      </Container>
    </Navbar>
  );
};

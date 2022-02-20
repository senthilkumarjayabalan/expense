import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { TransactionContext } from '../contexts/transactionContext';

export const Menu = () => {
  const [state] = useContext(TransactionContext);
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
            <Nav.Link>
              {state.user.email
                ? state.user.email.replace('@gmail.com', '')
                : 'sign up'}
            </Nav.Link>
          </LinkContainer>
        </Nav>
      </Container>
    </Navbar>
  );
};

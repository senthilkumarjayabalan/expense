import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { TransactionContext } from '../../contexts/transactionContext';
export const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [, setState] = useContext(TransactionContext);

  const signInHandler = async (e) => {
    setError('');
    setSuccess('');
    e.preventDefault();

    try {
      const response = await axios.post(
        'http://localhost:8080/api/v1/user/signin',
        {
          email,
          password,
        }
      );
      console.log(response.data);
      console.log(response.headers);
      if (response.data) {
        console.log('trueee');
        setState((prevState) => ({
          ...prevState,
          user: {
            email: response.data.email,
            token: response.headers.authorization,
          },
        }));
        setSuccess('Logged in Successfully');
        setEmail('');
        setPassword('');
      }
    } catch (err) {
      console.log(err);
      setError('Invalid User');
    }
  };

  return (
    <Card>
      <Card.Body>
        <Form>
          {error && <div className='text-danger error-text'>{error}</div>}
          {success && <div className='text-danger error-text'>{success}</div>}
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type='email'
              placeholder='Enter email'
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              value={password}
              type='password'
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder='Password'
            />
          </Form.Group>

          <Button variant='primary' onClick={signInHandler} type='submit'>
            Sign In
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

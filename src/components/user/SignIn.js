import axios from 'axios';
import React, { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
export const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const signInHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'http://localhost:8080/api/v1/user/signin',
        {
          email,
          password,
        }
      );
      if (response.data && response.data.password === password) {
        console.log('Logged in sucsesfully');
        setEmail('');
        setPassword('');
      }
    } catch (err) {
      setError('Invalid User');
    }
  };

  return (
    <Card>
      <Card.Body>
        <Form>
          {error && <div className='text-danger error-text'>{error}</div>}
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
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

import axios from 'axios';
import React, { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUpHandler = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:8080/api/v1/user/signup', {
      id: Math.floor(Math.random() * 100000) + 1,
      userName,
      email,
      password,
    });
  };

  return (
    <Card>
      <Card.Body>
        <Form>
          <Form.Group className='mb-3'>
            <Form.Label>User Name</Form.Label>
            <Form.Control
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              placeholder='Enter Name'
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type='email'
              onChange={(e) => {
                setEmail(e.target.value);
              }}
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

          <div className='signin'>
            Already a Member ?
            <Link to='signin' className='link-primary'>
              Sign In
            </Link>
          </div>

          <Button variant='primary' onClick={signUpHandler} type='submit'>
            Sign Up
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default SignUp;

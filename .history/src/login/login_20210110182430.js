import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import {Button,Form,} from 'react-bootstrap';

function Login(props) {
  const username = useFormInput('');
  const password = useFormInput('');

  let history = useHistory();

  const handleLogin = () => {
  
    axios.post('https://reqres.in/api/login', { username: username.value, password: password.value }).then(response => {
    console.log(response);
    alert("Login Successfullly");
    history.push('/tabledata')
    }).catch(error => {
        console.log(error);
        alert("Please enter correct email and password")
    });
  }

  return (
    <div style={{width:"70%", height:"70%", margin:"5% 15% 0% 15%", border:"1px solid green", padding:"5%"}} >
      <h1> Login Form </h1><br /><br />
 
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" {...username} placeholder="Enter email" required />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" {...password} placeholder="Password" required />
        </Form.Group>

        <Button variant="primary" onClick={handleLogin}>
          Submit
        </Button>
      </Form>

    </div>
  );
}

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}

export default Login;

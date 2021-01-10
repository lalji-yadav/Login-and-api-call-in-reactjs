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
    });
  }

  return (
    <div style={{width:"70%", height:"70%", margin:"5% 15% 0% 15%", border:"1px solid green", padding:"5%"}} >
      <h1> Login Form </h1><br /><br />
 
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" {...username} placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" {...password} placeholder="Password" />
        </Form.Group>
        {/* <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      {/* <div>
        Username<br />
        <input type="text" {...username} autoComplete="new-password" />
      </div>
      <div style={{ marginTop: 10 }}>
        Password<br />
        <input type="password" {...password} autoComplete="new-password" />
      </div>

      <button onClick={handleLogin} > Submit </button><br /> */}

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

import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";

function Login(props) {
  const username = useFormInput('');
  const password = useFormInput('');

  const handleLogin = (props) => {
  
    axios.post('https://reqres.in/api/login', { username: username.value, password: password.value }).then(response => {
    console.log(response);
    alert("Login Successfullly");
    this.props.history.push('/tabledat');
    // history.push('/tabledata')
    //this.history.navigate ('/tabledata');
    }).catch(error => {
        console.log(error);
        this.props.history.push('/tabledat');
       // history.push('/tabledata')
    });
  }

  return (
    <div>
      Login<br /><br />
      <div>
        Username<br />
        <input type="text" {...username} autoComplete="new-password" />
      </div>
      <div style={{ marginTop: 10 }}>
        Password<br />
        <input type="password" {...password} autoComplete="new-password" />
      </div>

      <button onClick={handleLogin} > Submit </button><br />

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

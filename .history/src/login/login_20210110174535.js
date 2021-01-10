import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";

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
        history.push('/tabledata');
    });
  }

  return (
    <div >
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

// LoginForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  let navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:3000/login', {
        username,
        password,
      });
  
      if (response.status === 200) {
        document.cookie = `username=${username}; max-age=900000; path=/`;
        console.log('Logged in');
        localStorage.setItem('isLoggedIn', 'true');
        navigate('/');
      } else {
        console.log('Login failed');
      }
    } catch (error) {
      console.error('An error occurred while logging in:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button className='login'>Login</button>
    </form>
  );
}

export default LoginForm;



import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userDoesNotExist, setUserDoesNotExist] = useState(false);

  let navigate = useNavigate();

  const handleSubmit = async (event) => {
  event.preventDefault();

  try {
  
      const loginResponse = await axios.post('http://localhost:3000/login', {
        username,
        password,
      });
  
      if (loginResponse.status === 200) {
        document.cookie = `token=${loginResponse.data.token}; max-age=900000; path=/`;
        console.log('Logged in');
        localStorage.setItem('isLoggedIn', 'true');
        navigate('/');
      } else {
        console.log('Login failed');
        
      }
  } catch (error) {
    console.error('An error occurred while logging in:', error);
    setUserDoesNotExist(true);
  }
};

  return (
    <>
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
      {userDoesNotExist && (
        <div>
          <p>This username does not exist. Please sign up instead.</p>
          <button onClick={() => navigate('/signup')}>Go to Sign Up</button>
        </div>
      )}
    </>
  );
}

export default LoginForm;
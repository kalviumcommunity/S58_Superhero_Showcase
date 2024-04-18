import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userExists, setUserExists] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const users = await axios.get('http://localhost:3000/superhero/signup/Get');
      
      if (users.data.some(user => user.username === username)) {
        setUserExists(true);
      } else {
        const response = await fetch('http://localhost:3000/superhero/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ username, password })
        });
        const data = await response.json();
        alert(data.msg);
        navigate('/');
      }
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <>
      <h1>Sign Up</h1>
      <form onSubmit={handleSignUp}>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required onChange={(e) => setUsername(e.target.value)} />
        {/* <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required onChange={(e) => setPassword(e.target.value)} /> */}
        <label htmlFor="password">Password:</label>
        <input type={showPassword ? "text" : "password"} 
          id="password" 
          name="password" 
          required 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <button type="button" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? "Hide" : "Show"} Password
        </button>
        <button type="submit">Sign Up</button>
      </form>
      {userExists && (
        <div>
          <p>User already exists. Please login.</p>
          <button onClick={() => navigate('/login')}>Go to Login</button>
        </div>
      )}
    </>
  );
}

export default SignUp;
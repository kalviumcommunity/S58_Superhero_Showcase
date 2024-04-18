// Navbar.jsx
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setIsLoggedIn(false);
    alert('You have been logged out.');
  };

  return (
    <>
        <nav>
          <div className='main-logo'>
            <img src="./src/assets/logo.png" alt="logo" />
          </div>
          <div className='nav-item'>
          <Link to="/">Home</Link>
            <Link to="/add">Add Superhero</Link>
            <Link to="/contacts">Contacts</Link>
            { !isLoggedIn && <Link to="/login"><button className='loginform'>Login</button></Link> }
            { isLoggedIn && <button className='logout' onClick={handleLogout}>Logout</button> }
            <Link to="/signup">Sign Up</Link>
          </div>
        </nav>
    </>
  )
}

export default Navbar;
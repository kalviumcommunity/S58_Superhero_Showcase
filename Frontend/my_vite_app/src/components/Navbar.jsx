import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
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
          </div>
        </nav>
    </>
  )
}

export default Navbar
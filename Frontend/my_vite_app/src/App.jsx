import React, { useEffect, useState } from 'react';
import Images from './components/LandingPage';
import Form from './components/Form';
import Search from './components/SearchBox';
import { Route, Link, Routes } from 'react-router-dom';
import './App.css';

function App() {
  const [data, setData] = useState(0);

  const fetchData = () => {
    fetch('http://localhost:3000/superhero/Get')
      .then(response => response.json())
      .then(res => {
        console.log(res.data);
        setData(res.data);
      }).catch((error) => {
        console.log(error);
      })
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <header>
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

        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/add" element={<Form fetchData = {fetchData}/>} />
        </Routes>
      </header>

      <Images data={data}  />
    </>
  );
}

export default App;
import React, { useEffect, useState } from 'react';
import Images from './LandingPage';
import Form from './Form';
import Search from './SearchBox';
import { Route, Link, Routes } from 'react-router-dom';
import '../App.css';
import SinglePage from './SinglePage';
import Navbar from './Navbar';

function Home() {
  const [data, setData] = useState(0);

  


  return (
    <>
      <Navbar/>
      <Search/>
      <Images />
    </>
  );
}

export default Home;
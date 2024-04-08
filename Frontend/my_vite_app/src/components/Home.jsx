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
      <Navbar/>
      <Search/>
      <Images data={data}  />
    </>
  );
}

export default Home;
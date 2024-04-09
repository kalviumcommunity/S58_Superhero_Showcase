import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Form from './Form';
import SinglePage from './SinglePage';

function AllRoutes() {
  return (
    <>
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Form />} />
          <Route path="/:id" element={<SinglePage/>} />
    </Routes>
    </>
    
  )
}

export default AllRoutes
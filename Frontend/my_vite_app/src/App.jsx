import React, { useEffect, useState } from 'react';
import './App.css';
import AllRoutes from './components/AllRoutes';

function App() {
  const [data, setData] = useState(0);

  return (
    <>
      <AllRoutes/>
    </>
  );
}

export default App;
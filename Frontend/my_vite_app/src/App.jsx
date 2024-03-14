import React, { useEffect, useState } from 'react';
import Images from './components/LandingPage';
import './App.css';



function App() {
  const [data, setData] = useState(0);

  const fetchData = () => {

    fetch('http://localhost:3000/superhero/Get')
        .then(response => response.json())
        .then(res => {
          console.log(res.data);
          setData(res.data);
        }).catch((error)=>{
            console.log(error);
        })
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <nav>
        <div id='main-logo'> 
          <img src="./src/assets/logo.png" alt="logo" />
      </div>
      <div id='search'>
        <input type="text" />
        <img src="" alt="" />
      </div>
    </nav>
    <Images data={data} />
    </>
  );
}

export default App;
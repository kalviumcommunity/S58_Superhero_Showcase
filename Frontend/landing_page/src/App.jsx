import { useState } from 'react'
import Images from './components/LandingPage'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

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
    <Images />
    </>
  )
}

export default App

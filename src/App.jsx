<<<<<<< HEAD
<<<<<<< Updated upstream
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
=======
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Card from './pages/Card/Card'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
const App = () => {
  return (
    <div className='app'>
      <Navbar />
        <Routes>
          <Route path='/' element = {<Home />}></Route>
          <Route path='/cart' element = {<Card />}></Route>
          <Route path='/order' element = {<PlaceOrder />}></Route>
        </Routes>
    </div>
>>>>>>> Stashed changes
=======
import React from 'react'
import Navbar from './components/Navbar/Navbar'
const App = () => {
  return (
    <div className='app'>
      <Navbar>
        
      </Navbar>
    </div>
>>>>>>> 74fd0d7b0ad0a9c34128107e2019003bc00f5e3f
  )
}

export default App
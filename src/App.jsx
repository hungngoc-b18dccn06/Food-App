
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Card from './pages/Card/Card'
import './App.css'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
const App = () => {
  return (
    <>
    <div className='app'>
      <Navbar />
        <Routes>
          <Route path='/' element = {<Home />}></Route>
          <Route path='/cart' element = {<Card />}></Route>
          <Route path='/order' element = {<PlaceOrder />}></Route>
        </Routes>
    </div>
    <Footer /></>
)}

export default App
import './App.css'
import Header from './components/Header'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import Slider from './components/Slider'
import Listing from './components/Listing'
import ProductCart from './components/ProductCart'
import Modal from './components/Modal'

function App() {
 

  return (
    <BrowserRouter>
     <Header/>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/slider' element={ <Slider/> } />
      <Route path='/listing' element={<Listing/> }/>
      <Route path='/cart' element={ <ProductCart/> } />
      <Route path='/modal' element={ <Modal/> } />
     </Routes>
    </BrowserRouter>
  )
}

export default App

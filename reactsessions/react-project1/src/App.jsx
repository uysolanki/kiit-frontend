import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Test from './components/Test'
import Counter from './components/Counter'
import Homepage from './components/Homepage'
import ProductsPage from './components/ProductsPage'
import ProductsPage1 from './components/ProductsPage1'
import ProductsPage2 from './components/ProductsPage2'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import SingleProduct from './components/SingleProduct'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Router>
            <Navbar/>
            <Routes>
                  <Route path="/" element={<Homepage/>} />
                  <Route path="/products" element={<ProductsPage2/>} />
                  <Route path="/counter" element={<Counter/>} />
                  <Route path="/single/:id" element={<SingleProduct/>} />
            </Routes>
     </Router>


    </>
  )
}

export default App

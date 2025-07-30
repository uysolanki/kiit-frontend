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
import Addproduct from './components/Addproduct'
import RegisterUser from './components/RegisterUser'
import LoginUser from './components/LoginUser'
import Heropage from './components/Heropage'
import SingleProduct1 from './components/SingleProduct1'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Router>
            <Navbar/>
            <Routes>
                  <Route path="/" element={<Heropage/>} />
                  <Route path="/products" element={<ProductsPage2/>} />
                  <Route path="/counter" element={<Counter/>} />
                  <Route path="/single/:id"  element={<SingleProduct1/>} />
                  <Route path="/addproduct"  element={<Addproduct/>} />
                  <Route path="/registeruser"  element={<RegisterUser/>} />
                  <Route path="/loginuser"  element={<LoginUser/>} />
            </Routes>
     </Router>


    </>
  )
}

export default App

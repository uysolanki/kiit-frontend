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

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ProductsPage2/>
    </>
  )
}

export default App

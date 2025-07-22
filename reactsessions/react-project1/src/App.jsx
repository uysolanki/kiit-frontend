import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Test from './components/Test'
import Counter from './components/Counter'
import Homepage from './components/Homepage'
import ProductsPage from './components/ProductsPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ProductsPage/>
    </>
  )
}

export default App

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Test from './components/Test.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';  
import ProductContextProvider from './context/ProductContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <>
  <ProductContextProvider>
    <App />
  </ProductContextProvider>
  </>,
)

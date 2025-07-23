import React from 'react'
import './Navbar.css' 
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
        <ul>
        <Link to="/"> <li>Homepage</li> </Link>
        <Link to="/products">    <li>Products</li></Link>
        <Link to="/counter">    <li>Counter</li></Link>
        </ul>
    </>
  )
}

export default Navbar
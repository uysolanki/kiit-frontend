import React, { useEffect, useState } from 'react'
//import products from '../data/products.js'
import axios from 'axios';
import ProductCard from './ProductCard';
const ProductsPage2 = () => {

  useEffect(
    ()=>{
        loadDataFromFakeStoreServer()
    },[]
  )
    
  async function loadDataFromFakeStoreServer()
  {
    try{
    const rawData= await axios.get('https://fakestoreapi.com/products')
    console.log(rawData)
    setMyproducts(rawData.data)
    }
    catch(error)
    {
      console.log(error)
    }
  }
  
  const[myproducts,setMyproducts]=useState([])
    console.log(myproducts)
  return (
    <>
        <div className="container">
             <div className="row">
                {myproducts.map((product, index) => {
                  return <ProductCard key={index} product={product}/>
              })}
        </div>
      </div>
    </>
  )
}

export default ProductsPage2
import React, { useEffect, useState } from 'react'
//import products from '../data/products.js'
import axios from 'axios';
import ProductCard from './ProductCard';
const ProductsPage2 = () => {

  useEffect(
    ()=>{
        loadDataFromFakeStoreServer()
    },[]    //dependency Array    //[] execute the code within the useeffect only once at component load time
  )                               //[count,count1,product] execute the code within the useeffect everytime any of the state mention is modified
                                  //, dont provide the dependency array, execute the code within the useeffect everytime any of the state is modified
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
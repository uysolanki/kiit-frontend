import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ProductCard from './ProductCard';

const SingleProduct = () => {

    const { id } = useParams();
    const [product,setProduct]=useState()
     useEffect(
    ()=>{
        loadDataFromFakeStoreServer()
    },[]    //dependency Array    //[] execute the code within the useeffect only once at component load time
  )                               //[count,count1,product] execute the code within the useeffect everytime any of the state mention is modified
                                  //, dont provide the dependency array, execute the code within the useeffect everytime any of the state is modified
  async function loadDataFromFakeStoreServer()
  {
    try{
    const rawData= await axios.get(`https://fakestoreapi.com/products/${id}`)
    console.log(rawData)
    setProduct(rawData.data)
    }
    catch(error)
    {
      console.log(error)
    }
  }

  return ( 
    <>
         <ProductCard product={product}/>
    </>
  )
}

export default SingleProduct
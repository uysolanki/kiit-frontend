import { useEffect, useState } from "react"
import ProductContext from "./ProductContext"
import axios from 'axios';

function ProductContextProvider({children})
{

   const [products,setProducts]=useState()

    useEffect(
    ()=>{
        loadDataFromFakeStoreServer()
    },[]    //dependency Array    //[] execute the code within the useeffect only once at component load time
  )                               //[count,count1,product] execute the code within the useeffect everytime any of the state mention is modified
                                  //, dont provide the dependency array, execute the code within the useeffect everytime any of the state is modified
  async function loadDataFromFakeStoreServer()
  {
    try{
    const rawData= await axios.get('http://localhost:8087/products/getAllProducts')
    console.log(rawData)
    setProducts(rawData.data)
    console.log(products)
    }
    catch(error)
    {
      console.log(error)
    }
  }


  return (
   <ProductContext.Provider value={{products}}>
    {children}
   </ProductContext.Provider>
  )
}

export default ProductContextProvider
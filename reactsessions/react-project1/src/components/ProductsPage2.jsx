import React, { useContext, useEffect, useState } from 'react'
//import products from '../data/products.js'
import axios from 'axios';
import ProductCard from './ProductCard';
import CategoryBar from './CategoryBar';
import SearchBox from './SearchBox';
import ProductContext from '../context/ProductContext';
const ProductsPage2 = () => {

  const {products}=useContext(ProductContext)
  
  console.log(products)
  
  const[myproducts,setMyproducts]=useState(products)
  const[buproducts,setBuproducts]=useState(products)
  
  console.log(myproducts)

  const productCategories=buproducts.map(
    (product)=>{
          return product.category
    }
  )
  console.log(productCategories)

  const uniqueCategories=new Set(productCategories)

  console.log(uniqueCategories)

  const allCategories=[...uniqueCategories,"All"]

  console.log(allCategories)

  function filterByCategory(categoryValue)
  {
        if(categoryValue!='All')
        {
        const filteredProducts=buproducts.filter(
          (product)=>{
            return product.category===categoryValue
          }
        )
        setMyproducts(filteredProducts)
      }
      else
      {
        setMyproducts(buproducts)
      }
  }

  function searchByTitle(event)
  {
    const value=event.target.value
    if(value.length===0)
      setMyproducts(buproducts)
    else
    {
    const searchedProducts=buproducts.filter(
      (product)=>
      {
        return product.title.toLowerCase().includes(value.toLowerCase())
      }
    )
    setMyproducts(searchedProducts)
  }
  }

  return (
    <>
        <SearchBox handleChange={searchByTitle}/>
        <CategoryBar list={allCategories} handleClick={filterByCategory} />
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
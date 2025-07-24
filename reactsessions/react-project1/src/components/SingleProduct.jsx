import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductCard from './ProductCard';

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null); // null instead of undefined

  useEffect(() => {
    loadDataFromFakeStoreServer();
  }, []);

  async function loadDataFromFakeStoreServer() {
    try {
      const rawData = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setProduct(rawData.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {
      product ? ( <ProductCard product={product} />  ) : (   <div className="text-center mt-5">Loading product details...</div>  )
      }
    </>
  );
}

export default SingleProduct;

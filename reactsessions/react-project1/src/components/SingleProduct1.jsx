import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './SingleProduct1.css'
import ProductContext from '../context/ProductContext';
import Breadcrumbs from './Breadcrumbs';
import star from '../assets/images/star.png';
import star_dull from '../assets/images/star_dull.png';

const SingleProduct1 = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const [product, setProduct] = useState(null); // null by default

  useEffect(() => {
    if (products && products.length > 0) {
      const foundProduct = products.find((prod) => prod.id === parseInt(id));
      setProduct(foundProduct);
    }
  }, [id]); // re-run when products or id changes

  return (

     <>
      {
        product ? (
          <>
          <Breadcrumbs product={product} />
          <div className='productdisplay'>
       <div className="product-display-left">
                <div className="product-display-img-list">
                    <img src={product.image} alt={product.title} />
                    {/* <img src={product.image} alt={product.title} />
                    <img src={product.image} alt={product.title} />
                    <img src={product.image} alt={product.title} /> */}
                </div>
                {/* <div className="productdisplay-img">
                    <img className='productdisplay-main-img' src={product.image} alt={product.name} />
                </div> */}
        </div>
       {/* <ProductCard key={product.id} product={product}/> */}
       <div className="product-display-right">
                <h1>{product.title}</h1>
                <div className="productdisplay-right-star">
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star_dull} alt="star dull" />
                    <p>(3121)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">
                        ₹{product.price}
                    </div>
                    <div className="productdisplay-right-price-new">
                        ₹{product.price}
                    </div>
                </div>
                <div className="productdisplay-right-description">
                    {product.description}
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-size-options">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={() => { addToCart(product.id) }}>
                    ADD TO CART
                </button>
                <p className='productdisplay-right-category'><span>Category :</span>{product.category}</p>
            </div>
      </div>
          </>   
        ) 
        : 
        (
          <div className="text-center mt-5">Loading product details...</div>
        )
      }
    </>
  );   
}

export default SingleProduct1
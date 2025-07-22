import React, { useState } from 'react'
import products from '../data/products.js'

const ProductsPage = () => {
    const[myproducts,setMyproducts]=useState(products)
    console.log(myproducts)
  return (
    <>
        <div className="container">
             <div className="row">
                {myproducts.map((product, index) => {
                return (
                    <div className="col-md-4 mb-4" key={index}>
          <div className="card h-100" style={{ width: '100%' }}>
            <img src={product.image} className="card-img-top" alt="..." style={{ height: '200px', objectFit: 'contain' }} />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">{product.title.substring(0, 30)}</h5>
              <p className="card-text">{product.description.substring(0, 50)}</p>
              <p className="card-text"><strong>Category:</strong> {product.category}</p>
              <p className="card-text"><strong>Rating:</strong> {product.rating.rate}</p>
              <div className="mt-auto d-flex justify-content-between">
                <a href="#" className="btn btn-primary">Add To Cart</a>
                <a href="#" className="btn btn-secondary">Wishlist</a>
              </div>
            </div>
          </div>
        </div>
      );
    })}
  </div>
</div>

    </>
  )
}

export default ProductsPage
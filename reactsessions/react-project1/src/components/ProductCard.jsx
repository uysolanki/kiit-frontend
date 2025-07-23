import React from 'react'
import { Link } from 'react-router-dom'
const ProductCard = ({product}) => {

     return (
            <div className="col-md-4 mb-4">
          <div className="card h-100" style={{ width: '100%' }}>
        <Link to={`/single/${product.id}`}>    <img src={product.image} className="card-img-top" alt="..." style={{ height: '200px', objectFit: 'contain' }} /> </Link>
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
}

export default ProductCard
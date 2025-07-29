import React from 'react'
import arrow_icon from '../assets/images/Arrow.png';
import './Breadcrumbs.css'
const Breadcrumbs = ({product}) => {
  
  return (
    <>
        <div className='breadcrum'>
            HOME <img src={arrow_icon} alt="arrow" /> SHOP <img src={arrow_icon} alt="arrow" /> {product.category} <img src={arrow_icon} alt="arrow" /> {product.title}
        </div>
    </>
  )
}

export default Breadcrumbs
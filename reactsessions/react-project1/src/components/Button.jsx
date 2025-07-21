import React from 'react'
import './Button.css'

const Button = ({handleClick,text,color}) => {
  return (
    // <button onClick={handleClick} className='red'>{text}</button>
     <button onClick={handleClick} style={{backgroundColor:color,color:'white'}}>{text}</button>
  )
}

export default Button
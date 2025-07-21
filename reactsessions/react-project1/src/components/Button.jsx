import React from 'react'
import './Button.css'

const Button = ({handleClick,text,color,count}) => {
  return (
    // <button onClick={handleClick} className='red'>{text}</button>
    // <button onClick={handleClick} style={{backgroundColor:color,color:'white'}}>{text}</button>
    //  <button onClick={handleClick} style={{backgroundColor:count%2==0?'red':'green',color:'white'}}>{text}</button>
    <button onClick={handleClick} className={count%2==0?'red':'green'}>{text}</button>
)
}

export default Button
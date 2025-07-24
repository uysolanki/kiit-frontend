import React from 'react'
import './CategoryBar.css'
const CategoryBar = ({list,handleClick}) => {
  return (
   <>
   <ol>
   {
    list.map(
        (item,index)=>{
                return <li key={index} onClick={()=>handleClick(item)}>{item}</li>
        }
    )
   }
   </ol>
   </>
  )
}

export default CategoryBar
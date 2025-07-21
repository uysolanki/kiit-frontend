import React from 'react'

const Box = (props) => {
  return (
    <div style={{backgroundColor:props.color}}>
        {props.children}
    </div>
  )
}

export default Box
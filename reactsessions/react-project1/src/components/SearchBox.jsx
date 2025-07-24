import React from 'react'

const SearchBox = ({handleChange}) => {
  return (
    <>
        <input type="text" onChange={handleChange}/>
    </>
  )
}

export default SearchBox
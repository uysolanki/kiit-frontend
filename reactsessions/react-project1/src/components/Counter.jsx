import React, { useState } from 'react'
import Button from './Button'

const Counter = () => {
    const [count,setCount]=useState(0)
 
    function increment()
    {
       if(count<10)
       setCount(count+1)
    }

    function decrement()
    {
       if(count>0)
       setCount(count-1)
    }

     function incrementBy2()
    {
       if(count<10)
       setCount(count+2)
    }

     function decrementBy2()
    {
       if(count>0)
       setCount(count-2)
    }
  return (
    <>
    {/* <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    <button onClick={incrementBy2}>IncrementBy2</button>
    <button onClick={decrementBy2}>DecrementBy2</button> */}


    <Button text="Increment" handleClick={increment}/>
    <Button text="Decrement" handleClick={decrement}/>
    <Button text="IncrementBy2" handleClick={incrementBy2}/>
    <Button text="DecrementBy2" handleClick={decrementBy2}/>
    <p>{count}</p>
    </>
  )
}

export default Counter
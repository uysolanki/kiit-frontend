import React from 'react'
import './Test.css'
const Test = () => {

  let number1=10
  let number2=30;
  let result=number1+number2;
  console.log(result)


  function addition(value1,value2)
  {
    return value1+value2;
  }
  return (
    <div>
      <div>Welcome to KIIT,Have a nice stay</div>
      <div>Batch Strength is {result}</div>
      <p>Revised Batch Strength is {addition(15,45)}</p>
    </div>
  )
}

export default Test
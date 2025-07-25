import React, { useContext } from 'react'
import './Test.css'
import UserContext from '../context/UserContext';
const Test = () => {

  let number1=10
  let number2=30;
  let result=number1+number2;
  console.log(result)


  function addition(value1,value2)
  {
    return value1+value2;
  }

  const {car}=useContext(UserContext)
  return (
    <div>
      <div>Welcome to KIIT,Have a nice stay</div>
      <div>Batch Strength is {result}</div>
      <p>Revised Batch Strength is {addition(15,45)}</p>
      <div>My Cars is {car}</div>
    </div>
  )
}

export default Test
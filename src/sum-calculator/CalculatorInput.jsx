import React, { useState } from 'react'
import SumCalculator from './SumCalculator'




function CalculatorInput() {

    const [value,setValue] = useState({})

    function inputValue1(e){
      const inputValue1 =Number(e.target.value)
      return setValue({...value,input1: inputValue1})
      
     }
    
     function inputValue2(e){
       const inputValue2 = Number(e.target.value)
       return setValue({...value,input2: inputValue2})
      }
    console.log(value)
  return (
    <>
    <div>
   
      <input 
      type="number"
      placeholder='number1'
      onChange={inputValue1}
       />  <br />

      <input
       type="number"
       placeholder='number2'
       onChange={inputValue2}
        />  <br />
         <SumCalculator value={value}/>
        
    </div>
    </>
  )
}

export default CalculatorInput

import React, { useReducer } from 'react'


const reducer = (state,action)=>{
  console.log(state.input1, "reducer sstate")
  switch(action.sym){
    case ("+"):
      return  state.input1 && state.input1 + state.input2;
      case ("-"):
        return  state.input1 - state.input2;
        case ("*"):
          return  state.input1 * state.input2;
          case ("/"):
            return  state.input1 / state.input2;
      default: 
      return state
  }
  
}

function SumCalculator({value}) {
  


    const [state,dispatch] = useReducer(reducer,value)
    console.log(value,"state")

    
   
  return (
    <div>
      
      <button onClick={()=>dispatch({sym:"+"})}>add</button>
      <button  onClick={()=>dispatch({sym:"-"})}>sub</button>
      <button  onClick={()=>dispatch({sym:"*"})}>multi</button>
      <button  onClick={()=>dispatch({sym:"/"})}>divis</button>

      <h1>{"state"}</h1>
    </div>
  )
}

export default SumCalculator

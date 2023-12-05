import React, { useReducer } from 'react'

const initialCounter = 0;

const reducer = (state, action)=>{
        switch(action.id){
            case "increase":
                 return state = state + action.init;
            case "decrease":
                 return state = state - action.init;
            
            default: return "we are looking for that"
        }
}

function Counter() {
    const [state, dispatch] = useReducer(reducer, initialCounter)
    console.log("hello")
  return (
    <div>
        <h1>{state}</h1>
      <button onClick={()=>dispatch({id:"increase", init:10})}>increase</button>
      <button onClick={()=>dispatch({id:"decrease", init:5})}>decrease</button>
    </div>
  )
}

export default Counter

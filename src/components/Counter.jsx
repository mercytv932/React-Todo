import { useState } from "react";

function Counter(){

  const [count, setCount] = useState(0);

  return(
    <>
    <span>Counter:{count}</span>
    <button onClick={()=> setCount(count+2)}>Increment</button>
    <button onClick={()=> setCount(count-1)}>Decrement</button>
    <button onClick={()=> setCount(0)}>Reset</button>
    
    
    </>
  )
}

export default Counter;
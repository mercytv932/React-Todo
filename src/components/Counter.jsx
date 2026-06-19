import { useState } from "react";

function Counter(){
const [array, setArray] = useState([]);

  return(
    <>
    <span>{array.toString()}</span>

    <button onClick={()=>{
      setArray((prevArray)=>[...prevArray, '+1']);
    }}>Increment</button>

    <button onClick={()=>{
      setArray((prevArray)=>[...prevArray, '-1']);
    }}>Decrement</button>

    <button>Reset</button>
    
    
    </>
  )
}

export default Counter;
function Counter(){
  return(
    <>
    <span>Counter:0</span>
    <button onClick={()=> console.log('add')}>Increment</button>
    <button onClick={()=> console.log('minus')}>Decrement</button>
    <button onClick={()=> console.log('reset')}>Reset</button>
    
    
    </>
  )
}

export default Counter;
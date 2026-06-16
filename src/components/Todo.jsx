function Todo({task,}){


  function handleClick(){
    console.log("button clicked")
  }


   return(
    <div className="todo-item">
      <h2>{ task }</h2>
      <button onClick={handleClick()}>Delete</button>
    </div>
  )
}

export default Todo;
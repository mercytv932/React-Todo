import './App.css'
import Todo from './Components/Todo.jsx'
import Title from './Components/Title.jsx'
import Popup from './Components/Popup.jsx';
import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <input type="text" onChange={(event)=>{
        console.log(event.target.value)
      }} />
      <button>Add todo</button>
    </div>
    <Title/>
    <Todo task="Learn React"/>
    <Todo task="Finish ASAP Frontend"/>
    <Todo task="Land a junior job"/>
    <Todo task="Make 100k per year"/>
    <Popup pop ="Are you sure?"/>
    </>
  )
}

export default App;

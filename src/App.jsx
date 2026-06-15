import './App.css'
import Todo from './Components/todo.jsx'
import Title from './Components/Title.jsx'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Title/>
    <Todo/>
    </>
  )
}

export default App;

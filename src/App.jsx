import './App.css'
import Todo from './Components/Todo.jsx'
import Title from './Components/Title.jsx'
import Popup from './Components/Popup.jsx';
import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Title/>
    <Todo task="Learn React" description = "Code along and take notes"/>
    <Todo task="Finish ASAP Frontend" description = "3 hours everyday"/>
    <Todo task="Land a junior job" description = "Apply for jobs 2 hours per day"/>
    <Todo task="Make 100k per year" description = "Live life and relax"/>
    <Popup pop ="Are you sure?"/>
    </>
  )
}

export default App;

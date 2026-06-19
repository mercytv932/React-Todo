import './App.css'
import Todo from './Components/Todo.jsx'
import Title from './Components/Title.jsx'
import Popup from './Components/Popup.jsx';
import Counter from './Components/Counter.jsx';
import { useState } from 'react'



function App() {

 const  [popupOpen, setPopupOpen] =  useState (false);

 function togglePopup() {
  setPopupOpen(true);
  console.log("parent notfied")
 }

 function closePopup(){
  setPopupOpen(false);
 }

  return (
    <>

    <div>
      <input type="text" onChange={(event)=>{
        console.log(event.target.value)
      }} />
      <button onClick={()=> setPopupOpen(true)}>Add todo</button>
    </div>
    <Title/>
    <Todo  togglePopup={togglePopup}  closePopup={closePopup} task="Learn React"/>
    <Todo togglePopup={togglePopup} closePopup={closePopup} task="Finish ASAP Frontend"/>
    <Todo togglePopup={togglePopup} closePopup={closePopup} task="Land a junior job"/>
    <Todo  togglePopup={togglePopup} closePopup={closePopup} task="Make 100k per year"/>
    {popupOpen && <Popup closePopup = {closePopup} title = "Are you sure?"/>} 


    </>
  )
}

export default App;
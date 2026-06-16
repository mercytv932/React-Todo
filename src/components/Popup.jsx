function Popup({pop}){
  return(
    <>
      <div className="popup">
  <span>{ pop }</span>

  <div className="popup__btns">
    <button className="popup__btn" onClick={()=>{
      console.log("Confirm button is cliked");
    }}>Confirm</button>

    <button className="popup__btn popup__btn--cancel" onClick={()=>{
      console.log("cancel button is clicked!")
    }}>
      Cancel
    </button>
  </div>
</div>

<div className="backdrop"></div>
    </>
  )
}

export default Popup;
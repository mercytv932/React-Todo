function Popup({ title, closePopup }) {
  return (
    <>
      <div className="popup">
        <span>{title}</span>

        <div className="popup__btns">
          <button
            className="popup__btn"
            onClick={() => {
              console.log('Confirm button is clicked')
            }}
          >
            Confirm
          </button>

          <button onClick={closePopup} className="popup__btn popup__btn--cancel">
            Cancel
          </button>
        </div>
      </div>

      <div className="backdrop" onClick={closePopup}></div>
    </>
  )
}

export default Popup;
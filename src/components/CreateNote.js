import React from 'react'
import "../styles/CreateNote.scss"
const CreateNote = () => {
    return (
        <div className="note_container">
            <form>
                <input type="text" placeholder="Title" autoComplete="off" />
                <textarea  id="" cols="" rows="" placeholder="Take a note..."></textarea>
           
            </form>
             <div className="close_btn_container">
                <button className="close_button">
                Close
            </button>
            </div>
            
        </div>
    )
}

export default CreateNote

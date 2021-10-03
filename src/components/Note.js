import React from 'react'
import { MdDelete } from "react-icons/md";
const Note = () => {
    return (
        <div className="note">
            <span>My first note</span>
            <div className="note-footer">
                <span>13/12/2021</span>
                <MdDelete className="delete-icon"/>
            </div>
            
            
        </div>
    )
}

export default Note

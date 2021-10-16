import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import "../styles/NoteList.scss"
const NotesList = (props) => {
    const deleteNote = () =>{
        props.deleteItem(props.id);
    }
    return (
        <>
            <div className="note">    
            <h3>{props.title}</h3>
            <p>{props.content} </p>
            <button onClick={deleteNote}>
            <DeleteOutlineIcon/>
            </button>
            </div>
            </>
    )
}

export default NotesList

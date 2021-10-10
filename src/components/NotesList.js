import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import "../styles/NoteList.scss"
const NotesList = (props) => {
    return (
        <>
            <div className="note">    
            <h3>{props.title}</h3>
            <p>{props.content} </p>
            <button>
            <DeleteOutlineIcon/>
            </button>
            </div>
            </>
    )
}

export default NotesList

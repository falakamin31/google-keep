import React, {useState} from 'react'
import "../styles/CreateNote.scss"
const CreateNote = (props) => {
    const [expand, setExpand] = useState(false)
    const [note , setNote ] = useState({
        title :"",
        content :""
    });

const inputEventHandle = (e) =>{
    const {name ,value } =e.target;

    setNote((prevData) =>{
    return {
        ...prevData,
        [name] :value,
        

    }
    
     });

}

    const addEvent = () =>{
            props.addNote(note);
            setNote({
                title :"",
                content :""
            }
            )
    }
    const expandItem  = () =>{
        setExpand(true);
    }
        
    
    return (
        <div className="note_container">
            <form>
                { expand ?
                <input type="text" value={note.title} onChange={inputEventHandle} name="title" placeholder="Title" autoComplete="off" />
                :null}

                <textarea  id="" cols="" rows="" value={note.content} name="content" onChange={inputEventHandle}placeholder="Take a note..." onClick={expandItem}>
                    
                </textarea>
           
            </form>
             <div className="close_btn_container">
                <button onClick={addEvent} className="close_button">
                Close
            </button>
            </div>
            
        </div>
    )
}

export default CreateNote

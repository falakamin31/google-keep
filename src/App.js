import React, { useState } from 'react'
import Header from './components/Header'
import NotesList from './components/NotesList'
import Footer from "./components/Footer"
import CreateNote from "./components/CreateNote"
import "./styles/App.scss"

const App = () => {
  const [addItem, setAddItem] = useState([]) ;

  const addNote = (note) =>{
    setAddItem((prevData) =>{
      return (
      [...prevData,note]
    )
    })
 }
 const onDelete = (id) =>{
  setAddItem((oldData)  =>
    oldData.filter((currdata, index) =>{
      return (index !== id);
    })
  ) 
   
 }

  return (
    <div className="container">
      <Header />
      <CreateNote addNote={addNote}/>
      <div className="notes_list">

      {
        addItem.map((itemVal,index) =>{
          return <NotesList
           title={itemVal.title}
            content={itemVal.content}
             key={index}
              id={index}
              deleteItem = {onDelete} />
        })
      }
      </div>


    <Footer/>
      
    </div>
  )
}

export default App

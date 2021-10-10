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
    console.log(note);
 }

  return (
    <div className="container">
      <Header />
      <CreateNote addNote={addNote}/>
      <div id="notes_list">

      {
        addItem.map((itemVal,index) =>{
          return <NotesList title={itemVal.title} content={itemVal.content} key={index} id={index} />
        })
      }
      </div>


    <Footer/>
      
    </div>
  )
}

export default App

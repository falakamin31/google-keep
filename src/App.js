import React from 'react'
import Header from './components/Header'
import NotesList from './components/NotesList'
import Footer from "./components/Footer"
import CreateNote from "./components/CreateNote"
import "./styles/App.scss"

const App = () => {
  return (
    <div className="container">
      <Header />
      <CreateNote/>
    <NotesList/>
    <Footer/>
      
    </div>
  )
}

export default App

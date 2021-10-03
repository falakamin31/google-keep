import React from 'react'
import Header from './components/Header'
import NotesList from './components/NotesList'
import "./styles/App.scss"

const App = () => {
  return (
    <div className="container">
      <Header />
    <NotesList/>
      
    </div>
  )
}

export default App

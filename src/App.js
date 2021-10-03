import React from 'react'
import Header from './components/Header'
import NotesList from './components/NotesList'
import Footer from "./components/Footer"
import "./styles/App.scss"

const App = () => {
  return (
    <div className="container">
      <Header />
    <NotesList/>
    <Footer/>
      
    </div>
  )
}

export default App

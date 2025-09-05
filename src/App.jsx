import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Tasks from './Pages/Tasks'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {

  return (
    <>
      <Navbar />
      <Tasks />
    </>
  )
}

export default App

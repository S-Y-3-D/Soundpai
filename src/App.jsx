import React from "react"
import Home from "./components/Home.jsx"
import Navbar from "./components/Navbar.jsx"
import {Routes,Route} from "react-router-dom"
import './App.css'

function App() {
 
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    </Routes>
    </>
  )
}

export default App

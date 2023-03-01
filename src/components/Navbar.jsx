import React from 'react'
import {Link} from 'react-router-dom'
import Logo from './Logo.jsx'
import Hamburger from 'hamburger-react'

export default function Navbar(){

    
    return (
    <nav className="navbar-container">
            <Link to="/"><Logo/></Link>
            <span className="menu"><Hamburger color="#0B8793" direction="right"/></span>

    </nav>)
}
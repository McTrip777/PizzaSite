import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/pizzaLogoNew2.png'
import '../styles/navbar.scss'

function Navbar() {
    return (
        <div className="navbar">
            <Link className="homeLogo" to="/"><img src={logo} /></Link>
            <div className="navbarRoutes">
                <Link to="/">Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
    )
}

export default Navbar

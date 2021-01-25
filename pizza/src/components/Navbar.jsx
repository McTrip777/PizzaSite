import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/pizzaLogoNew2.png'
import { NavHashLink } from 'react-router-hash-link'

function Navbar() {

    return (
        <div className="navbar">
            <Link className="homeLogo" to="/"><img src={logo} /></Link>
            <div className="navbarRoutes">
                <NavHashLink smooth to="/#home">Home</NavHashLink>
                <Link to="/menu/pizza">Menu</Link>
                <NavHashLink smooth to="/#contact">Contact</NavHashLink>
            </div>
        </div >
    )
}

export default Navbar

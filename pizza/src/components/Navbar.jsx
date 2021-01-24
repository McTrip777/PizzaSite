import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/pizzaLogoNew2.png'
import { HashLink } from 'react-router-hash-link'

function Navbar() {

    return (
        <div className="navbar">
            <Link className="homeLogo" to="/"><img src={logo} /></Link>
            <div className="navbarRoutes">
                <HashLink smooth to="/#home">Home</HashLink>
                <Link to="/menu">Menu</Link>
                <HashLink smooth to="/#contact">Contact</HashLink>
            </div>
        </div >
    )
}

export default Navbar

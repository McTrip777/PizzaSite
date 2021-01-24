import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/pizzaLogoNew2.png'
import '../styles/navbar.scss'

function Navbar() {
    return (
        <div className="menuNavbar">
            <div className="navbarRoutes">
                <Link to="/menu#pizza">Pizza</Link>
                <Link to="/menu#salad">Salad</Link>

            </div>
        </div>
    )
}

export default Navbar

import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className="menuNavbar">
            <div className="navbarRoutes">
                <Link to="/menu/pizza">Pizza</Link>
                <Link to="/menu/appetizers">Appetizers</Link>
                <Link to="/menu/sauce">Sauce</Link>
                <Link to="/menu/drinks">Drinks</Link>
            </div>
        </div>
    )
}

export default Navbar

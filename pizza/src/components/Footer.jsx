import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className="footer">
            <div className="foo footerLinks">
                <Link to="/">Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <div className="foo footerContact">
                <h4>Contact Us</h4>
                <p className="number">(208) 888-4857</p>
                <p className="email">contact@JohnnysPizza.com</p>
                <div className="socials">
                    <Link to="/facebook"><i className="fab fa-facebook fa-2x"></i></Link>
                    <Link to="/instagram"><i className="fab fa-instagram fa-2x"></i></Link>
                    <Link to="/twitter"><i className="fab fa-twitter fa-2x"></i></Link>
                </div>
            </div>
        </div>
    )
}

export default Footer
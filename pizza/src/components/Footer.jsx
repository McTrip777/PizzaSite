import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

function Footer() {
    return (
        <div className="footerContainer">
            <div className="footer">
                <div className="foo footerLinks">
                    <HashLink smooth to="/#home">Home</HashLink>
                    <Link to="/menu/pizza">Menu</Link>
                    <HashLink smooth to="/#contact">Contact</HashLink>
                </div>
                <div className="foo footerContact">
                    <h4>Contact Us</h4>
                    <p className="number">(888) 888-8888</p>
                    <p className="email">contact@(YourNameHere).com</p>
                    <div className="socials">
                        <Link to="/facebook"><i className="fab fa-facebook fa-2x"></i></Link>
                        <Link to="/instagram"><i className="fab fa-instagram fa-2x"></i></Link>
                        <Link to="/twitter"><i className="fab fa-twitter fa-2x"></i></Link>
                    </div>
                </div>
            </div>
            <div className="createdBy">
                <p>Copyright &copy; 2021 All Rights Reserved</p>
                <p>Created By Jacob McFaul</p>
            </div>
        </div>
    )
}

export default Footer
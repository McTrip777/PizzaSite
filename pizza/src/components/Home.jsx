import React, { useRef } from 'react'
import pizza from '../img/pizzaHomeImg.jpg'
import { Link } from "react-router-dom"
import MapComponent from './MapComponent'

function Home() {
    const contactRef = useRef()

    function handleClick() {
        contactRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div className="homeContainer" id="home">
            <div className="homeHeaderContainer">
                <img className="homeImg" src={pizza} alt="" />
                <h1 className="headerTitle">Family Owned & Operated</h1>
                <button onClick={handleClick}>Order Now</button>
            </div>
            <div className="homeContentContainer">
                <h3 className="missionTitle">Our Mission</h3>
                <p className="mission">(Your Name Here) is your hometown, family owned, and operated pizza shop.
                It is our goal to provide a great tasting pizza at an affordable cost!</p>
                <p className="mission">We make everything from scratch, as well as every order hot and fresh, just for you!
                Whatever your desire, it is our mission to make it to perfection every time!</p>
            </div>
            <div ref={contactRef} id="contact" className="homeContactContainer">
                <h3 className="contactTitle">Contact</h3>
                <div className="innerContactContainer">
                    <MapComponent /> {/* className = mapContainer */}
                    <div
                        className="contactInfo">
                        <div>
                            <h5 className="numberHeader">Call us at:</h5>
                            <p className="contactNumber">(888) 888-8888</p>
                        </div>
                        <div>
                            <h5 className="addressHeader">Where to find us!</h5>
                            <a target="_blank"
                            // href=""
                            >
                                {/* Google Address Link */}
                                <p className="address">Your Address Here</p>
                            </a>
                        </div>
                        <div className="socials">
                            <Link to="/facebook"><i className="fab fa-facebook fa-2x"></i></Link>
                            <Link to="/instagram"><i className="fab fa-instagram fa-2x"></i></Link>
                            <Link to="/twitter"><i className="fab fa-twitter fa-2x"></i></Link>
                        </div>
                        <a className="orderOnline" target="_blank"
                        // href=""
                        >
                            {/* Add online order route */}
                            <button>Order Online</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
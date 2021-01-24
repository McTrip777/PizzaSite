import React from 'react'
import pizza from '../img/pizzaHomeImg.jpg'
import { Link } from "react-router-dom"
import MapComponent from './MapComponent'

//Johnny's Pizza is a locally owned, family operated pizzeria that provides a quality pizza at an affordable cost for every family.

function Home() {

    return (
        <div className="homeContainer">
            <div className="homeHeaderContainer">
                <img className="homeImg" src={pizza} alt="" />
                <h1 className="headerTitle">Family Owned & Operated</h1>
                <Link to="/contact"><button>Order Now</button></Link>
            </div>
            <div className="homeContentContainer">
                <h3 className="missionTitle">Our Mission</h3>
                <p className="mission">Johnny's Pizza is your hometown, family owned, and operated pizza stop.
                It is our goal to provide a great tasting pizza at an affordable cost, for everyone!</p>
                <p className="mission">We make our dough and sauce from scratch, as well as every order hot and fresh, just for you!
                Whether you want a pepperoni or combination style pizza, our mission is to make it to perfection for you every time!</p>
            </div>
            <div className="homeContactContainer">
                <h3 className="contactTitle">Contact</h3>
                <div className="innerContactContainer">
                    <MapComponent /> {/* className = mapContainer */}
                    <div
                        className="contactInfo">
                        <h5 className="numberHeader">Call us at:</h5>
                        <p className="contactNumber">(208) 888-4857</p>
                        <h5 className="addressHeader">Where to find us!</h5>
                        <a target="_blank"
                            href="https://www.google.com/maps/dir//Johnny's+Pizza,+1526+N+Main+St,+Meridian,+ID+83642/@43.6177695,-116.3911977,19z/data=!4m8!4m7!1m0!1m5!1m1!1s0x54ae538d04a0c13f:0x40f2531f811a14b!2m2!1d-116.3911832!2d43.61764">
                            <p className="address">1526 N Main St, Meridian, ID 83642</p>
                        </a>
                        <div className="socials">
                            <Link to="/facebook"><i className="fab fa-facebook fa-2x"></i></Link>
                            <Link to="/instagram"><i className="fab fa-instagram fa-2x"></i></Link>
                            <Link to="/twitter"><i className="fab fa-twitter fa-2x"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
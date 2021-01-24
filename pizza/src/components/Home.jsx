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
                    <div className="contactInfo">
                        <p className="contactNumber">(208) 888-4857</p>
                        <h5 className="addressHeader">Address</h5>
                        <p className="address">1526 N Main St, Meridian, ID 83642</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
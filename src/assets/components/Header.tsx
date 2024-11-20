import React from 'react'
import "./header.css"
import Amalgam from '../images/Amalgam-logo.png'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <div className="header">
            <img src={Amalgam} alt="Amalgam" className="header-logo" />
            <nav className="nav">
                <div className="nav-links-box">
                    <Link to="/" className="navlink">Home</Link>
                    <Link to="/ourwork" className="navlink">Our Work</Link>
                    <Link to="/aboutus" className="navlink">About Us</Link>
                    <Link to="/blog" className="navlink">Blog</Link>
                </div>
                <div className="nav-button-container">
                    <button className="careers-button">Careers</button>
                    <button className="contact-us-button">Contact us</button>
                </div>
            </nav>
        </div>
    )
}

export default Header
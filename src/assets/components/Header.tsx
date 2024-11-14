import React from 'react'
import "./header.css"
import Amalgam from '../images/Amalgam-logo.png'

function Header() {
    return (
        <div className='header'>
            <img src={Amalgam} alt="Amalgam" className='header-logo' />
            <nav className='nav'>
                <div className='nav-links-box'>
                    <p className='navlink'>Home</p>
                    <p className='navlink'>Our Work</p>
                    <p className='navlink'>About Us</p>
                    <p className='navlink'>Blog</p>
                </div>
                <div className='nav-button-container'>
                    <button className='careers-button'>Careers</button>
                    <button className='contact-us-button'>Contact us</button>
                </div>
            </nav>
        </div>
    )
}

export default Header
import React, { useEffect } from 'react'
import "./header.css"
import Amalgam from '../images/Amalgam-logo.png'
import { Link, useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top
    }, [pathname]);

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
                    <button className="careers-button" onClick={() => navigate('/careers')}>Careers</button>
                    <button className="contact-us-button" onClick={() => navigate('/contactus')}>Contact us</button>
                </div>
            </nav>
        </div>
    )
}

export default Header
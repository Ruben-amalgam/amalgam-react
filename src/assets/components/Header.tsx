import React, { useEffect, useState } from 'react'
import "./header.css"
import Amalgam from '../images/Amalgam-logo.png'
import { Link, useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import HamburgerButton from '../icons/HamburgerBlack.png'
import { useMediaQuery } from 'react-responsive';

function Header() {
    const isMobile = useMediaQuery({ maxWidth: 570 });
    const navigate = useNavigate();
    const [isExpanded, setIsExpanded] = useState(false);
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top
    }, [pathname]);


    const toggleHeight = () => {
        setIsExpanded(!isExpanded);
    };
    return (

        <div className={`header ${isExpanded ? "expanded" : ""}`}>
            <div>
                <img src={Amalgam} alt="Amalgam" className="header-logo" />

                {isMobile ?
                    <img
                        src={HamburgerButton}
                        alt="Hamburger Button"
                        className="hamburger-button"
                        onClick={toggleHeight}
                        style={{ height: "30px", cursor: "pointer" }}
                    />
                    :


                    <nav className="nav">
                        <div className="nav-links-box">
                            <Link to="/" className="navlink">Home</Link>
                            <Link to="/ourwork" className="navlink">Our Work</Link>
                            <Link to="/aboutus" className="navlink">About Us</Link>
                            <Link to="/blog" className="navlink">Blog</Link>
                            <Link to="/startups" className="navlink">Startups</Link>
                        </div>
                        <div className="nav-button-container">
                            <button className="careers-button" onClick={() => navigate('/careers')}>Careers</button>
                            <button className="contact-us-button" onClick={() => navigate('/contactus')}>Contact us</button>
                        </div>
                    </nav>
                }
                {isMobile ?
                    <div className='accordion-header'>
                        <Link to="/" className="navlink">Home</Link>
                        <Link to="/ourwork" className="navlink">Our Work</Link>
                        <Link to="/aboutus" className="navlink">About Us</Link>
                        <Link to="/blog" className="navlink">Blog</Link>
                        <Link to="/startups" className="navlink">Startups</Link>
                        <button className="careers-button" onClick={() => navigate('/careers')}>Careers</button>
                        <button className="contact-us-button" onClick={() => navigate('/contactus')}>Contact us</button>
                    </div> : null}

            </div>
        </div>
    )
}

export default Header
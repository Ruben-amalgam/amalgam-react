import React from 'react'
import "../styles/faq.css"
import Chevron from '../assets/icons/ChevronDown.png'
import Amalgam from '../assets/images/Amalgam-logo.png'
import Facebook from '../assets/images/Facebook.png'
import Instagram from '../assets/images/Instagram.png'
import X from '../assets/images/X.png'
import LinkedIn from '../assets/images/LinkedIn.png'
import Youtube from '../assets/images/Youtube.png'
import { Link } from 'react-router-dom'
import Accordion from '../assets/components/AccordionFaq'

function Faq() {
    return (
        <div>
            <section className='faq-row-1'>
                <h1>Doubts?</h1>
                <p>Find answers to common queries.</p>
            </section>

            <section className='faq-row-2-shell'>
                <h1>FAQs</h1>
                <Accordion />
            </section>

            <section className='faq-row-3'>
                <h1>Havent found what you were looking for?</h1>
                <p>Reach out to us, and ask away</p>
                <button>Let's talk</button>
            </section>
            <section>
                <div className='blog-row-13'>
                    <div className='blog-row-13-content'>
                        <div className='blog-row-13-content-left'>
                            <img src={Amalgam} alt="Amalgam" className='logo' style={{ filter: "brightness(0) invert(0)" }} />
                        </div>
                        <div className='blog-row-13-content-middle'>
                            <Link to="/ourwork" className='blog-row-13-links'>Our Work</Link>
                            <Link to="/aboutus" className='blog-row-13-links'>About Us</Link>
                            <Link to="/blog" className='blog-row-13-links'>Blog</Link>
                            <Link to="/careers" className='blog-row-13-links'>Careers</Link>
                            <Link to="/contactus" className='blog-row-13-links'>Contact Us</Link>
                        </div>
                        <div className='blog-row-13-content-right' style={{ filter: "brightness(0) invert(0)" }}>
                            {/* <img src={Facebook} className='social-media' alt='Facebook' />
                            <img src={Instagram} className='social-media' alt='Instagram' />
                            <img src={X} className='social-media' alt='X' /> */}
                            <img src={LinkedIn} className='social-media' alt='LinkedIn' />
                            {/* <img src={Youtube} className='social-media' alt='Youtube' /> */}
                        </div>
                    </div>


                    <div className='blog-row-13-bottom'></div>
                    <div className='blog-row-13-footer'>
                        <p className='blog-row-13-footer-links'>© 2023 Relume. All rights reserved.</p>
                        <p className='blog-row-13-footer-links'>Privacy Policy</p>
                        <p className='blog-row-13-footer-links'>Terms and Conditions</p>
                        <p className='blog-row-13-footer-links'>Cookie Policy</p>
                    </div>
                </div>
            </section>

        </div >
    )
}

export default Faq
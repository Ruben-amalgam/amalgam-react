import React, { useEffect } from 'react'
import '../styles/careers.css'
import Chevron from '../assets/icons/ChevronDown.png'
import Cube from '../assets/images/Cube.png'
import Dots from '../assets/images/Dots.png'
import Amalgam from '../assets/images/Amalgam-logo.png'
import Facebook from '../assets/images/Facebook.png'
import Instagram from '../assets/images/Instagram.png'
import X from '../assets/images/X.png'
import LinkedIn from '../assets/images/LinkedIn.png'
import Youtube from '../assets/images/Youtube.png'
import { Link, } from 'react-router-dom'
import Accordion from '../assets/components/AccordionCareers'


function Careers() {
  return (
    <div>
      <section className='careers-row-1'>
        <h1>Amalgamate with us</h1>
        <p>Explore exciting career opportunities and become part of our success story.</p>
      </section>

      <section className='careers-row-2'>
        <div className='careers-row-2-header'>
          <h2>Our open roles</h2>
        </div>
        <Accordion />
        {/*
        
        <div style={{ width: "100%" }}>
          <div className='careers-row-2-divider' />
          <div className='careers-row-2-dropdown'>
            <h1>Sales Department</h1>
            <button><img src={Chevron} alt='Chevron'/></button>
          </div>
          <div className='careers-row-2-divider' />
          <div className='careers-row-2-dropdown'>
            <h1>Operation Department</h1>
            <button><img src={Chevron} alt='Chevron'/></button>
          </div>
        </div> */}
      </section>

      <section className='careers-row-3'>
        <img src={Dots} alt="dots" className='careers-dots' />
        <div className='careers-row-3-content'>
          <h1>You'll love it here if:</h1>
          <div className='careers-row-3-right'>
            <div className='careers-row-3-right-content'>
              <img src={Cube} alt='Cube' />
              <h3>You want to be valued for your professionalism.</h3>
              <p>Everyone has a voice, and each opinion is valued. We encourage our team members to always take ownership of their work.</p>
            </div>
            <div className='careers-row-3-right-content'>
              <img src={Cube} alt='Cube' />
              <h3>You always put the client first..</h3>
              <p>We are genuinely committed to making our clients happy by providing exceptional support. We think creatively and are passionate about delivering high-quality work.</p>
            </div>
            <div className='careers-row-3-right-content'>
              <img src={Cube} alt='Cube' />
              <h3>You value your freedom.</h3>
              <p>We give our team members the direction they need and the space they deserve to thrive. We also work asynchronously from anywhere in the world.</p>
            </div>
            <div className='careers-row-3-right-content'>
              <img src={Cube} alt='Cube' />
              <h3>You're a lifelong student.</h3>
              <p>We're curious, love to experiment, and view mistakes as learning opportunities. We strive for continuous improvement so that each day we become wiser and more confident than the one before.</p>
            </div>
          </div>

        </div>
      </section>

      <section>

        <div id='ourwork-row-13' className='blog-last'>
          <div className='blog-row-13-content'>
            <div className='blog-row-13-content-left' id='ourwork-footer-left'>
              <img src={Amalgam} alt="Amalgam" className='logo' style={{ filter: "brightness(0) invert(0)" }} />
            </div>
            <div className='blog-row-13-content-middle' id='ourwork-footer-middle'>
              <Link to="/ourwork" className='blog-row-13-links'>Our Work</Link>
              <Link to="/aboutus" className='blog-row-13-links'>About Us</Link>
              <Link to="/blog" className='blog-row-13-links'>Blog</Link>
              <Link to="/careers" className='blog-row-13-links'>Careers</Link>
              <Link to="/contactus" className='blog-row-13-links'>Contact Us</Link>
            </div>
            <div className='blog-row-13-content-right' id='ourwork-footer-right' style={{ filter: "brightness(0) invert(0)" }}>
              {/* <img src={Facebook} className='social-media' alt='Facebook' />
              <img src={Instagram} className='social-media' alt='Instagram' />
              <img src={X} className='social-media' alt='X' /> */}
              <img src={LinkedIn} className='social-media' alt='LinkedIn' />
              {/* <img src={Youtube} className='social-media' alt='Youtube' /> */}
            </div>
          </div>

          <div className='blog-row-13-bottom'>
            <div></div>
          </div>
          <div className='blog-row-13-footer' >
            <p className='blog-row-13-footer-links'>© 2023 Relume. All rights reserved.</p>
            <p className='blog-row-13-footer-links'>Privacy Policy</p>
            <p className='blog-row-13-footer-links'>Terms and Conditions</p>
            <p className='blog-row-13-footer-links'>Cookie Policy</p>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Careers
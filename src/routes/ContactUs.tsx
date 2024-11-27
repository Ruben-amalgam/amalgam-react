import React, { useEffect } from 'react'
import '../styles/contactus.css'
import Envelope from '../assets/icons/Envelope.png'
import Phone from '../assets/icons/Phone.png'
import Location from '../assets/icons/Location.png'
import Amalgam from '../assets/images/Amalgam-logo.png'
import Facebook from '../assets/images/Facebook.png'
import Instagram from '../assets/images/Instagram.png'
import X from '../assets/images/X.png'
import LinkedIn from '../assets/images/LinkedIn.png'
import Youtube from '../assets/images/Youtube.png'
import { Link, useLocation, useNavigate } from "react-router-dom";
import Placeholder from '../assets/images/Placeholder.png'


function ContactUs() {
  const navigate = useNavigate();
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top
    }, [pathname]);
  return (
    <div>

      <section className='contactus-row-1'>
        <div>
          <h1>Let's talk!</h1>
          <p>We're here to help. Contact us for any inquiries or support.</p>
        </div>
      </section>

      <section className='contactus-row-2'>
        <form>
          <label htmlFor="">Name</label>
          <input type="text" />

          <label htmlFor="">Email</label>
          <input type="text" />

          <label >Message</label>
          <textarea name="comments" placeholder="Enter your message"></textarea>
        </form>
      </section>

      <section className='contactus-row-3'>
        <div className='contactus-row-3-header'>
          <p>Want to reach out?</p>
          <h2>Here's our contact information</h2>
        </div>

        <div className='contactus-row-3-contact'>
          <div>
            <img src={Envelope} />
            <h3>Email</h3>
            <p>hello@amalgam-inc.com</p>
          </div>
          <div>
            <img src={Phone} />
            <h3>Phone</h3>
            <p>Add phone number for inquiries</p>
          </div>
          <div>
            <img src={Location} />
            <h3>US Office</h3>
            <p>10 Sarum Forge Way, Glen Mills, PA 19342
            </p>
            <p>
              EU Office
              <br />
              <span>
                Unit W10G, Ladytown Business Park
              </span>
              <br />
              <span>
                Naas, Co Kildare, Ireland
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className='contactus-row-4'>
        <div className='contactus-row-4-content'>
          <div>
            <h2>Always stay up to date</h2>
            <p>Subscribe to our monthly newsletter to receive the latest updates from Amalgam.</p>
            <div>
              <form className='contactus-row-4-form'>
                <input type="text" placeholder='Enter your email' />
                <button>Sign Up</button>
              </form>
              <p>By clicking Sign Up, you confirm that you agree with our Terms and Conditions.</p>
            </div>
          </div>
          <img src={Placeholder} alt="" />
        </div>
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
              <img src={Facebook} className='social-media' alt='Facebook' />
              <img src={Instagram} className='social-media' alt='Instagram' />
              <img src={X} className='social-media' alt='X' />
              <img src={LinkedIn} className='social-media' alt='LinkedIn' />
              <img src={Youtube} className='social-media' alt='Youtube' />
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


    </div>
  )
}

export default ContactUs
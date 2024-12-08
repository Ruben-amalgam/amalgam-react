import React from 'react';
import Bulb from '../assets/images/Bulb.png';
import { Link, useLocation } from 'react-router-dom'
import JobPosting from '../assets/images/JobPosting.png';
import '../styles/jobpost.css';
import LinkedIn from '../assets/images/LinkedIn.png'
import Amalgam from '../assets/images/Amalgam-logo.png'

function JobPost() {
    const location = useLocation();
    const job = location.state;


    return (
        <div>
            <section className='careers-row-1'>
                <h1>Amalgamate with us</h1>
                <p>Explore exciting career opportunities and become part of our success story.</p>
            </section>
            <section className='jobpost-row-2'>
                <img src={Bulb} alt="Bulb" className='jobpost-bulb' />
                <h1>{job?.title} </h1>
                <p>{job?.hours}<br />{job?.pay}</p>
            </section>
            <section className='jobpost-row-3'>
                <div>
                    <h1 className=''>Role overview</h1>
                    <div className='jobpost-role-descriptions'>
                        {job.duties.map((duty: string, index: number) => {
                            return <p key={index}>{duty}</p>
                        })}
                    </div>
                </div>
                <img src={JobPosting} alt="JobPosting" className='jobpost-jobposting' />
            </section>


            <section className='jobpost-row-4'>
                <h1>Apply now</h1>

                <form className='jobpost-form'>
                    <div className='jobpost-form-div'>
                        <div>
                            <label >First Name *</label>
                            <input type="text" id="firstName" />
                        </div>
                        <div>
                            <label htmlFor="lastName">Last Name *</label>
                            <input type="text" id="lastName" />
                        </div>
                    </div>
                    <div className='jobpost-form-div'>
                        <div>
                            <label >Email *</label>
                            <input type="text" id="email" />
                        </div>
                        <div>
                            <label >LinkedIn Profile </label>
                            <input type="text" id="Linkedin" />
                        </div>
                    </div>
                    <div className='jobpost-form-div'>
                        <div id='resume'>
                            <label >LinkedIn Profile </label>
                            <input type="text" id="Linkedin" />
                        </div>
                    </div>


                    <div className='jobpost-form-div'>
                        <div className='jobpost-form-textarea'>
                            <label htmlFor="message">Message</label>
                            <textarea id="message" placeholder='type your message'></textarea>
                        </div>
                    </div>
                    <div>
                        <input type="checkbox" id="terms" />
                        <label htmlFor="terms">I accept the Terms</label>
                    </div>
                </form>
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
        </div>
    );
}

export default JobPost;
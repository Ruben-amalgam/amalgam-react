import React from 'react'
import '../styles/startups.css'
import Star from '../assets/images/Star.png'
import Consulting from '../assets/images/Consulting.png'
import Entrprenuer from '../assets/images/Entrepreneurial-Hub.png'
import TechConsulting from '../assets/images/Tech-Consulting.png'
import AvatarPlaceholder from '../assets/images/AvatarPlaceholder.png'
import Placeholder from '../assets/images/Placeholder.png'
// import LeftQuotes from '../assets/images/LeftQuotes.png'
// import RightQuotes from '../assets/images/RightQuotes.png'
// import Ryan from '../assets/images/Ryan.png'
import Bayan from '../assets/images/Bayan.png'
import Mendoza from '../assets/images/Mendoza.png'
// import GreenStar from '../assets/images/GreenStar.png'

import Speaker from '../assets/images/Speaker.png'
import Amalgam from '../assets/images/Amalgam-logo.png'
// import Facebook from '../assets/images/Facebook.png'
// import Instagram from '../assets/images/Instagram.png'
// import X from '../assets/images/X.png'
import LinkedIn from '../assets/images/LinkedIn.png'
// import Youtube from '../assets/images/Youtube.png'
import { Link, useNavigate } from 'react-router-dom'
import BlobertRocket from '../assets/images/BlobertRocket.png'
import GreenBanner from 'assets/components/TestimonialBanner/GreenBanner'
import BlueBanner from 'assets/components/TestimonialBanner/BlueBanner'
import PurpleBanner from 'assets/components/TestimonialBanner/PurpleBanner'


function Startups() {
    const navigate = useNavigate()
    return (
        <div style={{overflowX: "hidden"}}>
            <section className='startups-row-1'>
                <div>
                    <h1>Launch, grow, thrive</h1>
                    <p>From expert advice to cutting-edge tech and connections with the right people, we provide <br />all the support your startup needs to thrive.</p>
                    <button>Let's talk!</button>
                </div>
                <img src={BlobertRocket} alt="" className='blobert-rocket' />
            </section>


            <div className='home-row-6' id='startups-row-2' style={{ height: "" }}>
                <div className='home-row-6-header' >
                    <h1 id='home-row-2-h1'>Why us? Hear it from our clients</h1>
                </div>
                <div>
                    {/* <img src={Ryan} className='fitzmier' /> */}
                    <GreenBanner />
                </div>
                <div>
                    {/* <img src={Bayan} className='mooney' alt='Bayan' /> */}
                    <BlueBanner />
                </div>
                <div>
                    {/* <img src={Mendoza} className='fitzmier' alt='Fitzmier'  /> */}
                    <PurpleBanner />
                </div>


            </div>

            <section className='startups-row-3'>
                <h1 id='startups-row-3-h1'>How we've helped other startups</h1>
                <div className='startups-row-3-content'>
                    {/* <div id='startups-header'>
                        <button>View all</button>
                        <button>Funding</button>
                        <button>Growth</button>
                        <button>Innovation</button>
                        <button>Success Stories</button>
                    </div> */}
                    <div className='startups-row-3-row'>
                        <div className='startups-row-3-content-card'>
                            <img src={Placeholder} alt="Placeholder" />
                            <p>Category</p>
                            <h5>Innovation Strategies for Startups</h5>
                            <p>Explore innovative strategies to stay ahead in the competitive startup landscape.</p>
                            <div className='startups-row-3-content-card-info'>
                                <img src={AvatarPlaceholder} alt="" />
                                <div className='startups-row-3-article-info'>
                                    <article >
                                        John Doe
                                    </article>
                                    <article> 11 Jan 2022 • 10 min read</article>
                                </div>
                            </div>
                        </div>
                        <div className='startups-row-3-content-card'>
                            <img src={Placeholder} alt="Placeholder" />
                            <p>Category</p>
                            <h5>Innovation Strategies for Startups</h5>
                            <p>Explore innovative strategies to stay ahead in the competitive startup landscape.</p>
                            <div className='startups-row-3-content-card-info'>
                                <img src={AvatarPlaceholder} alt="" />
                                <div className='startups-row-3-article-info'>
                                    <article >
                                        John Doe
                                    </article>
                                    <article> 11 Jan 2022 • 10 min read</article>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='startups-row-3-row'>
                        <div className='startups-row-3-content-card'>
                            <img src={Placeholder} alt="Placeholder" />
                            <p>Category</p>
                            <h5>Innovation Strategies for Startups</h5>
                            <p>Explore innovative strategies to stay ahead in the competitive startup landscape.</p>
                            <div className='startups-row-3-content-card-info'>
                                <img src={AvatarPlaceholder} alt="" />
                                <div className='startups-row-3-article-info'>
                                    <article >
                                        John Doe
                                    </article>
                                    <article> 11 Jan 2022 • 10 min read</article>
                                </div>
                            </div>
                        </div>
                        <div className='startups-row-3-content-card'>
                            <img src={Placeholder} alt="Placeholder" />
                            <p>Category</p>
                            <h5>Innovation Strategies for Startups</h5>
                            <p>Explore innovative strategies to stay ahead in the competitive startup landscape.</p>
                            <div className='startups-row-3-content-card-info'>
                                <img src={AvatarPlaceholder} alt="" />
                                <div className='startups-row-3-article-info'>
                                    <article >
                                        John Doe
                                    </article>
                                    <article> 11 Jan 2022 • 10 min read</article>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >


            <div className='home-row-4' id='addon-from-home-page'>
                <div className='home-row-4-top star-position' >
                    <img src={Star} alt="Star" className='star-location' />
                    <h1 className='home-row-4-top-header' style={{ color: "white" }}>We support you on three fronts</h1>
                    <p className='home-row-4-top-text' style={{ color: "white" }}>We support you on all fronts:</p>
                </div>

                <div className='home-row-4-bottom'>
                    <div className='home-row-4-images'>
                        <img src={Consulting} alt="Consulting" className='consulting' />
                        <p className='home-row-4-image-headers' style={{ color: "white" }}>Business consulting</p>
                        <p className='home-row-4-image-subheader' style={{ color: "white" }}>Our experienced team of consultants is ready to guide you through every step of your business journey, from growth advice to rebranding and beyond.</p>
                    </div>
                    <div className='home-row-4-images'>
                        <img src={TechConsulting} alt="Consulting" className='home-row-4-images tech-consulting' />
                        <p className='home-row-4-image-headers' style={{ color: "white" }}>Bespoke tech solutions</p>
                        <p className='home-row-4-image-subheader' style={{ color: "white" }}>We empower you with a wide range of bespoke tech solutions with transparent value, from custom software development to generative AI.</p>
                    </div>
                    <div className='home-row-4-images'>
                        <img src={Entrprenuer} alt="Consulting" className='home-row-4-images entrepreneur' />
                        <p className='home-row-4-image-headers' style={{ color: "white" }}>Entrepreneural hub</p>
                        <p className='home-row-4-image-subheader' style={{ color: "white" }}>We're your bridge to top-tier consultants, forward-thinking business owners, funders, and investors.</p>
                    </div>
                </div>
                <button className='startups-button' onClick={() => navigate("/contactus")}>Lets talk!</button>
            </div>
            <section className='startups-row-7'>
                <div>
                    <h5>"If you have a concept, we will help you refine it. If your concept is
                        <br /> market-tested, we will help you build it. If your product aligns with our
                        <br /> funding ethos, we will support it."</h5>

                    <div className='startups-row-7-content-card-info'>
                        <img src={AvatarPlaceholder} alt="" />
                        <div>
                            <article >
                                John Doe
                            </article>
                            <article> 11 Jan 2022 • 10 min read</article>
                        </div>
                    </div>
                </div>
            </section>
            <section className='startups-row-6'>
                <div className='startups-row-6-content'>
                    <h3>We accelerate your growth. Here's how:</h3>
                    <p>With 500+ years of cumulated expertise in business and tech, we'll:
                        <br />
                        <br />
                        - Empower you to make smart, data-informed decisions for your startup
                        <br />
                        - Avoid over-complications: you may need a simpler solution than you think
                        <br />
                        - Solve your more complex issues with bespoke tech solutions
                        <br />
                        - Connect you with brilliant entrepreneurs, funders, and contractors</p>

                </div>
                <img src={Speaker} alt="Speaker" />
            </section>

            <section className='startups-row-5'>
                <h2>Let's unlock your startup's potential</h2>
                <p>We can't wait to explore how we can make your breakthrough ideas come to life.</p>
                <button>Let's talk!</button>
            </section>

            <section>
                <div id='ourwork-row-13' className='blog-last'>
                    <div className='blog-row-13-content'>
                        <div className='blog-row-13-content-left' id='ourwork-footer-left'>
                            <img src={Amalgam} alt="Amalgam" className='startups-amalgam-footer-logo' style={{ filter: "brightness(0) invert(0)" }} />
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
        </div >
    )
}

export default Startups
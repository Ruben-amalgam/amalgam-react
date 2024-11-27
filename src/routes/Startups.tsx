import React from 'react'
import '../styles/startups.css'
import Stars from '../assets/icons/Stars.png'
import Consulting from '../assets/images/Consulting.png'
import Entrprenuer from '../assets/images/Entrepreneurial-Hub.png'
import TechConsulting from '../assets/images/Tech-Consulting.png'
import AvatarPlaceholder from '../assets/images/AvatarPlaceholder.png'
import Placeholder from '../assets/images/Placeholder.png'
import Speaker from '../assets/images/Speaker.png'
import Amalgam from '../assets/images/Amalgam-logo.png'
import Facebook from '../assets/images/Facebook.png'
import Instagram from '../assets/images/Instagram.png'
import X from '../assets/images/X.png'
import LinkedIn from '../assets/images/LinkedIn.png'
import Youtube from '../assets/images/Youtube.png'
import { Link } from 'react-router-dom'


function Startups() {
    return (
        <div>
            <section className='startups-row-1'>
                <div>
                    <h1>Launch, grow, thrive</h1>
                    <p>From expert advice to cutting-edge tech and connections with the right people, we provide <br />all the support your startup needs to thrive.</p>
                    <button>Let's talk!</button>
                </div>

            </section>


            <section className='startups-row-2'>
                <h2>Why us? Hear it from our<br />clients</h2>
                <div className='startups-row-2-testimonials-container'>
                    <div className='startups-row-2-testimonials'>
                        <span>
                            <img src={Stars} alt="Stars" />
                            <img src={Stars} alt="Stars" />
                            <img src={Stars} alt="Stars" />
                            <img src={Stars} alt="Stars" />
                            <img src={Stars} alt="Stars" />
                        </span>
                        <div>
                            <p>"Working with this company has been a game-changer for our startup."</p>
                            <img src={AvatarPlaceholder} alt="Placeholder" />
                            <p>John Doe<br />Founder, Startup Co.</p>
                        </div>
                    </div>
                    <div className='startups-row-2-testimonials'>
                        <span>
                            <img src={Stars} alt="Stars" />
                            <img src={Stars} alt="Stars" />
                            <img src={Stars} alt="Stars" />
                            <img src={Stars} alt="Stars" />
                            <img src={Stars} alt="Stars" />
                        </span>
                        <div>
                            <p>"Their expertise and guidance have been invaluable to our success."</p>
                            <img src={AvatarPlaceholder} alt="Placeholder" />
                            <p>John Doe<br />Founder, Startup Co.</p>
                        </div>
                    </div>
                    <div className='startups-row-2-testimonials'>
                        <span>
                            <img src={Stars} alt="Stars" />
                            <img src={Stars} alt="Stars" />
                            <img src={Stars} alt="Stars" />
                            <img src={Stars} alt="Stars" />
                            <img src={Stars} alt="Stars" />
                        </span>
                        <div>
                            <p>"I highly recommend this company to any startup looking to accelerate their growth."</p>
                            <img src={AvatarPlaceholder} alt="Placeholder" />
                            <p>John Doe<br />Founder, Startup Co.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='startups-row-3'>
                <h1>How we've helped other startups</h1>
                <div className='startups-row-3-content'>
                    <div>
                        <button>View all</button>
                        <button>Funding</button>
                        <button>Growth</button>
                        <button>Innovation</button>
                        <button>Success Stories</button>
                    </div>
                    <div className='startups-row-3-row'>
                        <div className='startups-row-3-content-card'>
                            <img src={Placeholder} alt="Placeholder" />
                            <p>Category</p>
                            <h5>Innovation Strategies for Startups</h5>
                            <p>Explore innovative strategies to stay ahead in the competitive startup landscape.</p>
                            <div className='startups-row-3-content-card-info'>
                                <img src={AvatarPlaceholder} alt="" />
                                <div>
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
                                <div>
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
                                <div>
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
                                <div>
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


            <div className='home-row-4' style={{ backgroundColor: "#012a21" }}>
                <div className='home-row-4-top'>
                    <h1 className='home-row-4-top-header' style={{ color: "white" }}>How we can help you</h1>
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
                <button className='startups-button'>Lets talk!</button>
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
        </div >
    )
}

export default Startups
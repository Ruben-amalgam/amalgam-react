import React from 'react'
import Rocket from '../assets/images/Rocket.png'
import Banner from '../assets/images/Banner.png'
import Relume from '../assets/images/Relume.png'
import Webflow from '../assets/images/Webflow.png'
import Solutions from '../assets/images/Solutions.png'
import Placeholder from '../assets/images/Placeholder.png'
import Consulting from '../assets/images/Consulting.png'
import Entrprenuer from '../assets/images/Entrepreneurial-Hub.png'
import TechConsulting from '../assets/images/Tech-Consulting.png'
import AmalgamGroup from '../assets/images/Amalgam-Group.png'
import Amalgam from '../assets/images/Amalgam-logo.png'
import Cube from '../assets/images/Cube.png'
import Facebook from '../assets/images/Facebook.png'
import Instagram from '../assets/images/Instagram.png'
import X from '../assets/images/X.png'
import LinkedIn from '../assets/images/LinkedIn.png'
import Youtube from '../assets/images/Youtube.png'
import AFmensa from '../assets/images/carousel-photos/AFmensa.png'
import BankOfGuam from '../assets/images/carousel-photos/BankOfGuam.png'
import BureauVanDijk from '../assets/images/carousel-photos/BureauVanDijk.png'
import CleanItSupply from '../assets/images/carousel-photos/CleanItSupply.png'
import Everbank from '../assets/images/carousel-photos/Everbank.png'
import JohnTempleton from '../assets/images/carousel-photos/JohnTempleton.png'
import MTBank from '../assets/images/carousel-photos/M&TBank.png'
import Moodys from '../assets/images/carousel-photos/Moodys.png'
import NGrowth from '../assets/images/carousel-photos/NGrowth.png'
import PearlX from '../assets/images/carousel-photos/PearlX.png'
import PFA from '../assets/images/carousel-photos/PFA.png'
import Sofi from '../assets/images/carousel-photos/Sofi.png'
import Zenbank from '../assets/images/carousel-photos/Zenbanx.png'








import './home.css'

function Home() {
    return (
        <div >

            <div className='home-row-1'>
                <div className='home-row-1-text-box'>
                    <h1 className="home-row-1-heading">We're the rocket fuel to your moonshot</h1>
                    <p className='home-text'>We empower visionary business owners like you to make their ideas come to life. Benefit from our long-standing expertise in business development and product-building, and access our network of enlightened entrepreneurs. Are you working on a breakthrough idea?</p>
                    <p className='home-text'>Are you working on a breakthrough idea?</p>
                    <button className='home-lets-talk'>Let's talk</button>
                </div>
                <img src={Rocket} className='rocket' alt='Rocket' />
            </div>

            <div className='home-row-2'>
                <h3 className='home-row-2-header'>We've worked with:</h3>
                <div className='home-row-2-worked-with'>
                    <div className='home-row-2-carousel-content'>
                        {/* <img src={Webflow} className='webflow' alt='Webflow' /> */}
                        {/* <img src={Relume} className='relume' alt='Relume' /> */}
                        <img src={AFmensa} className='afmensa'/>
                        <img src={BankOfGuam} className='bankofguam'/>
                        <img src={BureauVanDijk} className='bureauvandijk'/>
                        <img src={CleanItSupply} className='cleanitsupply'/>
                        <img src={Everbank} className='everbank'/>
                        <img src={JohnTempleton} className='johntempleton'/>
                        <img src={MTBank} className='mtbank'/>
                        <img src={Moodys} className='moodys'/>
                        <img src={NGrowth} className='ngrowth'/>
                        <img src={PearlX} className='pearlx'/>
                        <img src={PFA} className='pfa'/>
                        <img src={Sofi} className='sofi'/>
                        <img src={Zenbank} className='zenbank'/>
                    </div>
                </div>
            </div>

            <div className='home-row-3'>
                <div className='home-row-3-container'>
                    <div className='home-row-3-left'>
                        <h1 className='home-row-3-left-header'>Connecting the dots</h1>
                        <p className='home-row-3-left-text'>The best things in life come in threes. So does our offering.</p>
                    </div>
                    <div className='home-row-3-right'>
                        <img src={Placeholder} className='solutions' alt='Placeholder' />
                    </div>
                </div>
            </div>

            <div className='home-row-4'>
                <div className='home-row-4-top'>
                    <h1 className='home-row-4-top-header'>How we can help you</h1>
                    <p className='home-row-4-top-text'>We support you on all fronts:</p>
                </div>

                <div className='home-row-4-bottom'>
                    <div className='home-row-4-images'>
                        <img src={Consulting} alt="Consulting" className='consulting' />
                        <p className='home-row-4-image-headers'>Business consulting</p>
                        <p className='home-row-4-image-subheader'>Our experienced team of consultants is ready to guide you through every step of your business journey, from growth advice to rebranding and beyond.</p>
                    </div>
                    <div className='home-row-4-images'>
                        <img src={TechConsulting} alt="Consulting" className='home-row-4-images tech-consulting' />
                        <p className='home-row-4-image-headers'>Bespoke tech solutions</p>
                        <p className='home-row-4-image-subheader'>We empower you with a wide range of bespoke tech solutions with transparent value, from custom software development to generative AI.</p>
                    </div>
                    <div className='home-row-4-images'>
                        <img src={Entrprenuer} alt="Consulting" className='home-row-4-images entrepreneur' />
                        <p className='home-row-4-image-headers'>Entrepreneural hub</p>
                        <p className='home-row-4-image-subheader'>We're your bridge to top-tier consultants, forward-thinking business owners, funders, and investors.</p>
                    </div>
                </div>
                <button className='lets-talk-button'>Lets talk!</button>
            </div>

            <div className='home-row-5'>
                <div className='home-row-5-headers'>
                    <p className='home-row-5-header'>Amalgam in numbers</p>
                    <p className='home-row-5-sub-header'>We've spent the past decade serving clients around the globe. With 500+ years of cumulated knowledge, you know you're in expert hands. We're looking forward to supporting your business's needs.</p>
                </div>
                <div className='home-row-5-statistics'>
                    <div className='home-row-5-stat'>
                        <div className='home-row-5-stat-header'>10+</div>
                        <div className='home-row-5-stat-sub-header'>Years in business</div>
                    </div>
                    <div className='home-row-5-stat'>
                        <div className='home-row-5-stat-header'>30+</div>
                        <div className='home-row-5-stat-sub-header'>Clients aroundthe globe</div>
                    </div>
                    <div className='home-row-5-stat'>
                        <div className='home-row-5-stat-header'>500+</div>
                        <div className='home-row-5-stat-sub-header'>Years of accumulated experience</div>
                    </div>
                </div>
            </div>

            <div className='home-row-6'>
                <div className='home-row-6-header'>
                    Why us? Hear it from our clients
                </div>
                <div className='home-row-6-webflow-container'>
                    <div className='home-row-6-left'>
                        <img src={Webflow} className='home-row-6-image' alt='Webflow' />
                        <p className='home-row-6-webflow-header'>Partnering with Amalgam has helped us to streamline our team’s evaluative workflows and to pilot new technologies in ways that consistently help us to better understand the impact of our funding and to learn how to improve our grantmaking.</p>
                        <div>
                            <p className='home-row-6-name'>Steve Fitzmier</p>
                            <p className='home-row-6-title'>Director of Planning & Evaluation, John Templeton Foundation</p>
                        </div>
                    </div>
                    <div className='home-row-6-left'>
                        <img src={Webflow} className='home-row-6-image' alt='Webflow' />
                        <p className='home-row-6-webflow-header'>We’ve worked with many consulting firms, but finding one that delivers excellent results and genuinely cares about our success is extremely rare. The Amalgam team has been delightful, working smoothly, consistently keeping us informed, and accommodating every change we needed.</p>
                        <div>
                            <p className='home-row-6-name'>Mike Mooney</p>
                            <p className='home-row-6-title'>Chief Technology Officer, CleanItSupply</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='home-row-6-webflow-container'>
                <div className='home-row-6-left'>
                    <img src={Webflow} className='home-row-6-image' alt='Webflow' />
                    <p className='home-row-6-webflow-header'>Amalgam has helped us build the virtual power plant that has
                        helped us raise over $100 millions to date. They've been our loyal allies since our early days, wisely guiding our efforts as we scaled. That's why they're our sole development partner.</p>
                    <div>
                        <p className='home-row-6-name'>Peter Mendonez</p>
                        <p className='home-row-6-title'>Co-Founder and President, PearlX Infrastructure</p>
                    </div>
                </div>
                <div className='home-row-6-left'>
                    <img src={Webflow} className='home-row-6-image' alt='Webflow' />
                    <p className='home-row-6-webflow-header'>ASK NEERAJ TO BE PUT IN TOUCH GET QUOTE GET QUOTE GET QUOTE</p>
                    <div>
                        <p className='home-row-6-name'>Zach Peterson</p>
                        <p className='home-row-6-title'>Chief Operating Officer, Premier Financial Alliance</p>
                    </div>
                </div>
            </div>

            <div className='home-row-7'>
                <div className='home-row-7-container'>
                    <p className='home-row-7-header'>We meet you where you are</p>
                    <p className='home-row-7-text'>From your business's conceptual phase to the realization of your most ambitious plans, our end-to-end solution gets you where you want to be. At what stage of your journey are you?</p>
                </div>
                <img src={AmalgamGroup} className='amalgam-group' alt='Amalgam-group' />
            </div>
            <div className='divider'>
            </div>
            <div className='home-row-8'>
                <div className='home-row-8-header'>Business consulting</div>
                <div className='home-row-8-content'>
                    <div className='home-row-8-content-container'>
                        <img src={Cube} className='cube' alt='Cube' />
                        <p className='home-row-8-content-header'>Business & strategy consulting</p>
                    </div>
                    <div className='home-row-8-content-container'>
                        <img src={Cube} className='cube' alt='Cube' />
                        <p className='home-row-8-content-header'>Operational optimization</p>
                    </div>
                    <div className='home-row-8-content-container'>
                        <img src={Cube} className='cube' alt='Cube' />
                        <p className='home-row-8-content-header'>Marketing & branding support</p>
                    </div>
                </div>
            </div>

            <div className='home-row-9'>
                <div className='home-row-9-header'>Bespoke tech solutions</div>
                <div className='home-row-9-content'>
                    <div className='home-row-9-content-container'>
                        <img src={Cube} className='cube' alt='Cube' />
                        <p className='home-row-9-content-header'>Customer experience & UX/UI</p>
                    </div>
                    <div className='home-row-8-content-container'>
                        <img src={Cube} className='cube' alt='Cube' />
                        <p className='home-row-9-content-header'>Web & mobile app development</p>
                    </div>
                    <div className='home-row-8-content-container'>
                        <img src={Cube} className='cube' alt='Cube' />
                        <p className='home-row-9-content-header'>Artificial Intelligence & Machine Learning</p>
                    </div>
                    <div className='home-row-8-content-container'>
                        <img src={Cube} className='cube' alt='Cube' />
                        <p className='home-row-9-content-header'>Languages & scripts</p>
                    </div>
                </div>
            </div>

            <div className='home-row-10'></div>
            <div className='home-row-8'>
                <div className='home-row-8-content'>
                    <div className='home-row-8-content-container'>
                        <img src={Cube} className='cube' alt='Cube' />
                        <p className='home-row-8-content-header'>Data management & integration</p>
                    </div>
                    <div className='home-row-8-content-container'>
                        <img src={Cube} className='cube' alt='Cube' />
                        <p className='home-row-8-content-header'>Databases, integrations & tools</p>
                    </div>
                    <div className='home-row-8-content-container'>
                        <img src={Cube} className='cube' alt='Cube' />
                        <p className='home-row-8-content-header'>Cloud, blockchain & platforms</p>
                    </div>
                </div>
            </div>
            <div className='home-row-11' >
                <div className='home-row-9-header'>Entrepreneurial hub</div>
                <div className='home-row-8'>
                    <div className='home-row-8-content'>
                        <div className='home-row-8-content-container'>
                            <img src={Cube} className='cube' alt='Cube' />
                            <p className='home-row-8-content-header'>Networking & funding</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='home-row-12'>
                <div className='home-row-12-content'>
                    <p className='home-row-12-header'>
                        Get in touch
                    </p>
                    <p className='home-row-12-text'>Reach out to us to gather more information or set our wheels in motion.</p>
                    <button className='home-lets-talk-bottom'>Let's talk</button>
                </div>
            </div>

            <div className='home-row-13'>
                <div className='home-row-13-content'>
                    <div className='home-row-13-content-left'>
                        <img src={Amalgam} alt="Amalgam" className='logo' />
                    </div>
                    <div className='home-row-13-content-middle'>
                        <p className='home-row-13-links'>Our Work</p>
                        <p className='home-row-13-links'>About Us</p>
                        <p className='home-row-13-links'>Blog</p>
                        <p className='home-row-13-links'>Careers</p>
                        <p className='home-row-13-links'>Contact Us</p>
                    </div>
                    <div className='home-row-13-content-right'>
                        <img src={Facebook} className='social-media' alt='Facebook' />
                        <img src={Instagram} className='social-media' alt='Instagram' />
                        <img src={X} className='social-media' alt='X' />
                        <img src={LinkedIn} className='social-media' alt='LinkedIn' />
                        <img src={Youtube} className='social-media' alt='Youtube' />
                    </div>
                </div>

                <div className='home-row-13-bottom'></div>
                <div className='home-row-13-footer'>
                    <p className='home-row-13-footer-links'>© 2023 Relume. All rights reserved.</p>
                    <p className='home-row-13-footer-links'>Privacy Policy</p>
                    <p className='home-row-13-footer-links'>Terms and Conditions</p>
                    <p className='home-row-13-footer-links'>Cookie Policy</p>
                </div>
            </div>
        </div>
    )
}

export default Home
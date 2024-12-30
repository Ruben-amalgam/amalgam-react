import { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import AmalgamGroup from '../assets/images/Amalgam-Group.png'
import Amalgam from '../assets/images/Amalgam-logo.png'
import Constructive from '../assets/images/carousel-photos/Constructive.png'
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
import TIAA from '../assets/images/carousel-photos/TIAA.png'
import Zenbank from '../assets/images/carousel-photos/Zenbanx.png'
import Consulting from '../assets/images/Consulting.png'
import Cube from '../assets/images/Cube.png'
import Entrprenuer from '../assets/images/Entrepreneurial-Hub.png'
import Facebook from '../assets/images/Facebook.png'
import Fitzmier from '../assets/images/Fitzmier.png'
import Mooney from '../assets/images/Mooney.png'
import Mendoza from '../assets/images/Mendoza.png'
import Instagram from '../assets/images/Instagram.png'
import LinkedIn from '../assets/images/LinkedIn.png'
import Rocket from '../assets/images/Rocket.png'
import Solutions from '../assets/images/Solutions.png'
import TechConsulting from '../assets/images/Tech-Consulting.png'
import Header from '../assets/components/Header'
import X from '../assets/images/X.png'
import Youtube from '../assets/images/Youtube.png'
import LeftQoutes from '../assets/images/LeftQuotes.png'
import RightQoutes from '../assets/images/RightQuotes.png'
import Writing from '../assets/images/Writing.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/home.css'
import { useMediaQuery } from 'react-responsive';



function Home() {
    const navigate = useNavigate();
    const isMobile = useMediaQuery({ maxWidth: 570 });
    // const { pathname } = useLocation();
    // useEffect(() => {
    //     // window.scrollTo(0, 0); // Scroll to the top
    // }, [pathname]);
    return (

        <div style={{ boxSizing: "border-box" }}>

            <div className='home-row-1'>
                <div className='home-row-1-text-box'>
                    <h1 className="home-row-1-heading">We're the rocket fuel to your moonshot</h1>
                    <p className='home-text'>We empower visionary business owners like you to make their ideas come to life. Benefit from our long-standing expertise in business development and product-building, and access our network of enlightened entrepreneurs. Are you working on a breakthrough idea?</p>
                    <p className='home-text'>Are you working on a breakthrough idea?</p>
                    <button className='home-lets-talk' onClick={() => { navigate("./contactus") }}>Let's talk</button>
                    <img src={Rocket} className='rocket2' alt='Rocket' />
                </div>
                <img src={Rocket} className='rocket' alt='Rocket' />
            </div>

            <div className='home-row-2'>
                <h3 className='home-row-2-header'>Trusted by big names {isMobile ? <br /> : null} and rising stars alike</h3>
                <div className='home-row-2-worked-with'>
                    <div className='home-row-2-carousel-content'>
                        <img src={Constructive} className='constructive' alt='constructive' />
                        <img src={BankOfGuam} className='bankofguam' alt='BankOfGuam' />
                        <img src={Moodys} className='moodys' alt='moodys' />
                        <img src={JohnTempleton} className='johntempleton' alt='johntempleton' />
                        <img src={NGrowth} className='ngrowth' alt='ngrowth' />
                        <img src={PFA} className='pfa' alt='pfa' />
                        <img src={Sofi} className='sofi' alt='sofi' />
                        <img src={TIAA} className='tiaa' alt='tiaa' />
                        <img src={CleanItSupply} className='cleanitsupply' alt='CleanItSupply' />
                        <img src={MTBank} className='mtbank' alt='mtbank' />
                        <img src={PearlX} className='pearlx' alt='pearlx' />
                        <img src={Zenbank} className='zenbank' alt='zenbank' />

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
                        <img src={Solutions} className='solutions' alt='Placeholder' />
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
                <div>

                    <div className='home-row-6-header'>
                        Why us? Hear it from our clients
                    </div>
                    <div>
                        <img src={Fitzmier} className='fitzmier' />
                    </div>
                    <div>
                        <img src={Mooney} className='mooney' />
                    </div>
                    <div>
                        <img src={Mendoza} className='fitzmier' />
                    </div>
                </div>
            </div>


            <div className='home-row-7'>
                <div className='home-row-7-container'>
                    <p className='home-row-7-header'>We meet you where you are</p>
                    <p className='home-row-7-text'>From your business's conceptual phase to the realization of your most ambitious plans, our end-to-end solution gets you where you want to be. At what stage of your journey are you?</p>
                    <button>I'm a startup</button>
                </div>
                <img src={AmalgamGroup} className='amalgam-group' alt='Amalgam-group' />
            </div>
            <div className='divider'>
            </div>
            <div className='home-row-8'>
                <div className='home-row-8-header business-consulting'>Business consulting</div>
                <div className='home-row-8-content' >
                    <div>
                        <h3>Business & strategy consulting</h3>
                    </div>
                    <div>
                        <h3>Operational optimization</h3>
                    </div>
                    <div>
                        <h3>Marketing & branding support</h3>
                    </div>
                </div>
                <div className='home-row-8-header'>Bespoke tech Solution</div>
                <div className='home-row-8-content2'>
                    <div>
                        <h3>Customer experience & UX/UI</h3>
                    </div>
                    <div>
                        <h3>Web & mobile app development</h3>
                    </div>
                    <div>
                        <h3>Artificial Intelligence & machine learning</h3>
                    </div>
                </div>
                <div className='home-row-8-content3'>
                    <div>
                        <h3>Databases, integrations & tools</h3>
                    </div>
                    <div>
                        <h3>Cloud & management Services</h3>
                    </div>
                    <div>
                        <h3>Web3 & Blockchain</h3>
                    </div>
                </div>

                <div className='home-row-8-header'>Entreprenueral hub</div>
                <div className='home-row-8-content4'>
                    <div>
                        <h3>Tech & advisory</h3>
                    </div>
                    <div>
                        <h3>Funding</h3>
                    </div>
                    <div>
                        <h3>Networking & funding</h3>
                    </div>
                </div>

            </div>


            <div className='home-row-12'>
                <img src={Writing} alt="Writing" id='writing' />
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
                        <Link to="/ourwork" className='home-row-13-links'>Our Work</Link>
                        <Link to="/aboutus" className='home-row-13-links'>About Us</Link>
                        <Link to="blog" className='home-row-13-links'>Blog</Link>
                        <Link to="careers" className='home-row-13-links'>Careers</Link>
                        <Link to="contactus" className='home-row-13-links'>Contact Us</Link>
                    </div>
                    <div className='home-row-13-content-right'>
                        {/* <img src={Facebook} className='social-media' alt='Facebook' />
                        <img src={Instagram} className='social-media' alt='Instagram' />
                        <img src={X} className='social-media' alt='X' /> */}
                        <img src={LinkedIn} className='social-media' alt='LinkedIn' />
                        {/* <img src={Youtube} className='social-media' alt='Youtube' /> */}
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
        </div >
    )
}
export default Home
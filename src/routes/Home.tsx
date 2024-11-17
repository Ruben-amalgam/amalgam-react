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
                <img src={Banner} className='banner' alt='Banner' />
                <div className='home-row-2-worked-with'>
                    <img src={Webflow} className='webflow' alt='Webflow' />
                    <img src={Relume} className='relume' alt='Relume' />
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
                        <img src={Webflow} className='home-row-6-image' />
                        <p className='home-row-6-webflow-header'>Partnering with Amalgam has helped us to streamline our team’s evaluative workflows and to pilot new technologies in ways that consistently help us to better understand the impact of our funding and to learn how to improve our grantmaking.</p>
                        <div>
                            <p className='home-row-6-name'>Steve Fitzmier</p>
                            <p className='home-row-6-title'>Director of Planning & Evaluation, John Templeton Foundation</p>
                        </div>
                    </div>
                    <div className='home-row-6-left'>
                        <img src={Webflow} className='home-row-6-image' />
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
                    <img src={Webflow} className='home-row-6-image' />
                    <p className='home-row-6-webflow-header'>Amalgam has helped us build the virtual power plant that has
                        helped us raise over $100 millions to date. They've been our loyal allies since our early days, wisely guiding our efforts as we scaled. That's why they're our sole development partner.</p>
                    <div>
                        <p className='home-row-6-name'>Peter Mendonez</p>
                        <p className='home-row-6-title'>Co-Founder and President, PearlX Infrastructure</p>
                    </div>
                </div>
                <div className='home-row-6-left'>
                    <img src={Webflow} className='home-row-6-image' />
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
                <img src={AmalgamGroup} className='amalgam-group'/>
            </div>

            <div className='divider'>

            </div>
        </div>
    )
}

export default Home
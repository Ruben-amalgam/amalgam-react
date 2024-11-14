import React from 'react'
import Rocket from '../assets/images/Rocket.png'
import Banner from '../assets/images/Banner.png'
import Relume from '../assets/images/Relume.png'
import Webflow from '../assets/images/Webflow.png'
import Solutions from '../assets/images/Solutions.png'
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
                <img src={Rocket} className='rocket' />
            </div>

            <div className='home-row-2'>
                <h3 className='home-row-2-header'>We've worked with:</h3>
                <img src={Banner} className='banner' />
                <div className='home-row-2-worked-with'>
                    <img src={Webflow} className='webflow' />
                    <img src={Relume} className='relume' />
                </div>
            </div>

            <div className='home-row-3'>
                <div className='home-row-3-container'>
                    <div className='home-row-3-left'>
                        <h1 className='home-row-3-left-header'>Connecting the dots</h1>
                        <p className='home-row-3-left-text'>The best things in life come in threes. So does our offering.</p>
                    </div>
                    <div className='home-row-3-right'>
                        <img src={Solutions} className='solutions' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
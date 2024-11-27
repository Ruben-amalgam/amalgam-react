import React, { useEffect } from 'react'
import Laptop from '../assets/images/Laptop.png'
import '../styles/ourwork.css'
import Cube from '../assets/images/Cube.png'
import Easel from '../assets/images/Easel.png'
import {Link, useLocation, useNavigate } from 'react-router-dom'

function Ourwork() {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top
    }, [pathname]);
    return (
        <div>
            <div className='ourwork-row-1'>
                <div className='ourwork-row-1-left'>
                    <img src={Laptop} className='laptop' alt='Placeholder' />
                </div>
                <div className='ourwork-row-1-right'>
                    <h1 className='ourwork-row-1-right-header'>Tailored solutions for every stage of your journey</h1>
                    <p className='ourwork-row-1-right-text'>We empower entrepreneurs to make a positive impact by growing their business, adopting cutting-edge technology, and building the right connections.</p>
                    <button className='ourwork-lets-talk'>Let's talk</button>
                </div>
            </div>

            <div className='ourwork-row-2'>
                <div className='ourwork-row-2-container'>
                    <h1 className='ourwork-row-2-header'>How we do it</h1>
                    <p className='ourwork-row-2-text'>We leverage our highly specialized knowledge and deliver innovative solutions that address the needs of forward-thinking business owners.</p>
                    <p className='ourwork-row-2-text'>We support you as you build your products, scale your business, and grow your network with the right connections.</p>
                </div>
            </div>

            <div className='ourwork-row-3'>
                <div className='ourwork-row-3-container'>
                </div>
            </div>

            <div className='ourwork-row-4'>
                <div className='ourwork-row-4-container'>
                    <div className='ourwork-row-4-left'>
                        <p className='ourwork-row-3-header'>You'll benefit from:</p>
                        <div className='ourwork-row-4-subheader'>
                            <img src={Cube} alt="cube" className='cube' />
                            <p>Having a single point of reference for business and digitization support</p>
                        </div>

                        <div className='ourwork-row-4-subheader'>
                            <img src={Cube} alt="cube" className='cube' />
                            <p>Custom solutions that meet your unique needs</p>
                        </div>

                        <div className='ourwork-row-4-subheader'>
                            <img src={Cube} alt="cube" className='cube' />
                            <p>A wide network of visionary leaders, world-class consultants, and funders</p>
                        </div>
                    </div>

                    <div>
                        <img src={Easel} alt="" className='easel' />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Ourwork 
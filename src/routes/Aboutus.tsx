import React from 'react'
import Laptop from '../assets/images/Laptop.png'
import '../styles/aboutus.css'

function Aboutus() {
    return (
        <div>
            <div className='aboutus-row-1'>
                <div className='aboutus-row-1-left'>
                    <img src={Laptop} className='laptop' alt='Placeholder' />
                </div>
                <div className='aboutus-row-1-right'>
                    <h1 className='aboutus-row-1-right-header'>Tailored solutions for every stage of your journey</h1>
                    <p className='aboutus-row-1-right-text'>We empower entrepreneurs to make a positive impact by growing their business, adopting cutting-edge technology, and building the right connections.</p>
                    <button className='aboutus-lets-talk'>Let's talk</button>
                </div>
            </div>

            <div className='aboutus-row-2'>
                <div className='aboutus-row-2-container'>
                    <h1 className='aboutus-row-2-header'>How we do it</h1>
                    <p className='aboutus-row-2-text'>We leverage our highly specialized knowledge and deliver innovative solutions that address the needs of forward-thinking business owners.</p>
                    <p className='aboutus-row-2-text'>We support you as you build your products, scale your business, and grow your network with the right connections.</p>
                </div>
            </div>

            <div className='aboutus-row-3'>
                <div className='aboutus-row-3-container'>
                </div>
            </div>

            <div className='aboutus-row-4'>
                <div className='aboutus-row-4-container'>
                    <div className='aboutus-row-4-left'>
                        <p></p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Aboutus
import React from 'react'
import '../styles/aboutus.css'
import AvatarPlaceholder from '../assets/images/AvatarPlaceholder.png'
import Neeraj from '../assets/images/Neeraj.png'
import Cube from '../assets/images/Cube.png'

function Aboutus() {
    return (
        <div>
            <section className='aboutus-row-1'>
                <div className='aboutus-row-1-content'>
                    <h2>When I founded Amalgam, I wanted to build a business that reflected my ethos. We made one promise to our clients, and never broke it: to always put them first.</h2>
                    <div className='aboutus-row-1-info'>
                        <img src={AvatarPlaceholder} alt="placeholder" />
                        <h4>Neeraj Vir</h4>
                        <p>CEO, Amalgam</p>
                    </div>
                    <img src={Neeraj} className='Neeraj' alt="Neeraj" />
                </div>
            </section>

            <section className='aboutus-row-2'>
                <div className='aboutus-row-2-left'>
                    <h2 className='aboutus-row-2-left-header'>What we believe in</h2>
                    <p className='aboutus-row-2-left-text'>At Amalgam, our commitment to innovation, efficiency, and partnership is rooted in these four core values:</p>
                    <button className='aboutus-row-2-left-button'>Learn more about us.</button>
                </div>
                <div className='aboutus-row-2-right'>
                    <div className='aboutus-row-2-right-top'>
                        <div className='aboutus-row-2-right-content'>
                            <img src={Cube} alt="cube" className='cube' />
                            <h2>Creativity</h2>
                            <p>We take pride in our ability to think outside the box, as it allows us to quickly identify the best path forward for our clients from a business and technological perspective.</p>
                        </div>
                        <div className='aboutus-row-2-right-content'>
                            <img src={Cube} alt="cube" className='cube' />
                            <h2>Integrity</h2>
                            <p>It informs our every move - from our way of working and the quality of our deliverables, to the clients we onboard. We love collaborating with inspired entrepreneurs who strive to find impactful solutions to world problems.</p>
                        </div>
                    </div>
                    <div className='aboutus-row-2-right-bottom'>
                        <div className='aboutus-row-2-right-content'>
                            <img src={Cube} alt="cube" className='cube' />
                            <h2>Transparency</h2>
                            <p>We're fueled by our enthusiasm and dedication, and our passion has been growing evermore since we began our journey 14 years ago. We see every challenge an opportunity for growth.</p>
                        </div>
                        <div className='aboutus-row-2-right-content'>
                            <img src={Cube} alt="cube" className='cube' />
                            <h2>Passion</h2>
                            <p>Our integrity translates into transparency in our practice. Our clear and honest communication helps us nurture a healthy, trusting relationship with our clients.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='aboutus-row-3'>
                <div className='aboutus-row-3-content'>
                    <p className='aboutus-row-3-content-header'>How we do it</p>
                    <p className='aboutus-row-3-content-text'>We leverage our highly specialized knowledge and deliver innovative solutions that address the needs of forward-thinking business owners.</p>
                    <p className='aboutus-row-3-content-text'>We support you as you build your products, scale your business, and grow your network with the right connections.</p>
                </div>
            </section>
        </div>
    )
}

export default Aboutus
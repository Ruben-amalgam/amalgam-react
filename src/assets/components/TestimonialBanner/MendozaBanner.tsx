import React from 'react'
import "./purple-banner.css"
import Thomas from '../../icons/Mendoza.png'
import LeftQoutes from '../../images/LeftQuotes.png'
import RightQoutes from '../../images/RightQuotes.png'


function MendozaBanner() {
    return (
        <div className='purple-banner'>
            <img src={Thomas} alt="Bayan" className='purple-banner-thomas' />
            <img src={LeftQoutes} alt="Left Quotes" className='purple-banner-left-quotes' />
            <img src={RightQoutes} alt="Right Quotes" id='mendoza-right-qoutes' className='purple-banner-right-quotes' />
            <p id='mendoza-p'>Amalgam has helped us build the virtual power plant that has helped us raise over $100 millions to date. They've been our loyal allies since our early days, wisely guiding our efforts as we scaled. That's why they're our sole development partner.</p>
            <div className='purple-banner-title' >
                <h6>Peter Medoza</h6>
                <p>Co-Founder and President,<br /> PearlX Infrastructure</p>
            </div>
        </div>
    )
}

export default MendozaBanner
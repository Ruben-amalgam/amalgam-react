import React from 'react'
import "./blue-banner.css"
import Bayan from '../../icons/BayanAlturkestani.png'
import LeftQoutes from '../../images/LeftQuotes.png'
import RightQoutes from '../../images/RightQuotes.png'

function BlueBanner() {
    return (
        <div className='blue-banner'>
            <img src={Bayan} alt="Bayan" className='blue-banner-bayan' />
            <img src={LeftQoutes} alt="Left Quotes" className='blue-banner-left-quotes' />
            <img src={RightQoutes} alt="Right Quotes" className='blue-banner-right-quotes' />
            <p>First-time startup founders are continuously confronted with new situations; that's why top-tier advisory is key. Amalgam's extensive entrepreneurial experience has helped shape Conan MedTech into what it is today. Their deep questions and advice showed how invested they were in our venture. Amalgam championed us with potential investors, and their vast network gave us access to legal advice and startup events where we could pitch our business to potential investors.</p>
            <div className='blue-banner-title'>
                <h6>Bayan Alturkestani</h6>
                <p>Founder, President & CEO,<br/> Conan MedTech Corp.</p>
            </div>
        </div>
    )
}

export default BlueBanner
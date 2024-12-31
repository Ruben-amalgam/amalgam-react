import React from 'react'
import "./purple-banner.css"
import Thomas from '../../icons/ThomasKlein.png'
import LeftQoutes from '../../images/LeftQuotes.png'
import RightQoutes from '../../images/RightQuotes.png'


function PurpleBanner() {
    return (
        <div className='purple-banner'>
            <img src={Thomas} alt="Bayan" className='purple-banner-thomas' />
            <img src={LeftQoutes} alt="Left Quotes" className='purple-banner-left-quotes' />
            <img src={RightQoutes} alt="Right Quotes" className='purple-banner-right-quotes' />
            <p>First-time startup founders are continuously confronted with new situations; that's why top-tier advisory is key. Amalgam's extensive entrepreneurial experience has helped shape Conan MedTech into what it is today. Their deep questions and advice showed how invested they were in our venture. Amalgam championed us with potential investors, and their vast network gave us access to legal advice and startup events where we could pitch our business to potential investors.</p>
            <div className='purple-banner-title'>
                <h6>Thomas Klein</h6>
                <p>COO,<br />constructive built environment.</p>
            </div>
        </div>
    )
}

export default PurpleBanner
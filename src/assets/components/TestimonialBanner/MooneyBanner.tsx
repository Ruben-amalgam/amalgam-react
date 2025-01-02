import React from 'react'
import "./blue-banner.css"
import Mooney from '../../icons/Mooney.png'
import LeftQoutes from '../../images/LeftQuotes.png'
import RightQoutes from '../../images/RightQuotes.png'

function MooneyBanner() {
    return (
        <div className='blue-banner'id='mooney-banner'>
            <img src={Mooney} alt="Bayan" className='blue-banner-bayan'  />
            <img src={LeftQoutes} alt="Left Quotes" className='blue-banner-left-quotes' />
            <img src={RightQoutes} alt="Right Quotes" id='mooney-right-quotes'/>
            <p id='mooney-p'>We’ve worked with many consulting firms, but finding one that delivers excellent results and genuinely cares about our success is extremely rare. The Amalgam team has been delightful, working smoothly, consistently keeping us informed, and accommodating every change we needed.</p>
            <div className='mooney-banner-title'>
                <h6>Mike Mooney</h6>
                <p>Chief Technology Officer,<br/> CleanItSupply</p>
            </div>
        </div>
    )
}

export default MooneyBanner 
import React from 'react'
import "./green-banner.css"
import Ryan from '../../icons/RyanWard.png'
import RightQuotes from '../../images/RightQuotes.png'
import LeftQuotes from '../../images/LeftQuotes.png'

function GreenBanner() {
  return (
    <div className='green-banner'>
      <img src={Ryan} alt="Ryan" className='green-banner-ryan' />
      <img src={RightQuotes} alt="Right Quotes" className='green-banner-right-quotes' />
      <img src={LeftQuotes} alt="Left Quotes" className='green-banner-left-quotes' />
      <p>At Confinity, 'Amalgam' stands for 'peace of mind.' Their guidance has been priceless in bringing our vision to life. They dig deep to create the best bespoke solution, leverage their immense knowledge, and are a joy to work with. I sleep soundly, knowing our development is brilliantly handled!</p>
      <div className='green-banner-title'>
        <h6>Ryan Ward</h6>
        <p>Founder & CEO, Confinity</p>
      </div>

    </div>
  )
}

export default GreenBanner
import React from 'react'
import "./green-banner.css"
import Ryan from '../../icons/RyanWard.png'
import Fitzmeir from '../../icons/Fitzmier.png'
import RightQuotes from '../../images/RightQuotes.png'
import LeftQuotes from '../../images/LeftQuotes.png'

function FitzmierBanner() {
  return (
    <div className='green-banner' >
      <img src={Fitzmeir} alt="Ryan" className='green-banner-ryan' />
      <img src={RightQuotes} alt="Right Quotes" className='green-banner-right-quotes' />
      <img src={LeftQuotes} alt="Left Quotes" className='green-banner-left-quotes' />
      <p>Partnering with Amalgam has helped us to streamline our team’s evaluative workflows and to pilot new technologies in ways that consistently help us to better understand the impact of our funding and to learn how to improve our grantmaking.</p>
      <div className='fitzmier-banner-title'>
        <h6>Steve Fitzmier</h6>
        <p>Director of Planning & Evaluation, <br />John Templeton Foundation</p>
      </div>

    </div>
  )
}

export default FitzmierBanner 
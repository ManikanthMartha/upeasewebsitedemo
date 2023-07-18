import React from 'react'
import map from './../../assets/mapbg.png'

import Navbar from '../../components/Navbar/Navbar'
import './hero.css'

const Hero = () => {
  return (
    <div className='hero'>
    
        <div className='content'>
            <p className='info'>
            <span className='highlighted_text'>Personalised</span> learning experience <br></br>
            at your <span className='highlighted_text'>fingertips</span>
            </p>
        </div>
        <div className='map'>
            <img src={map} alt="Map" />
        </div>
    </div>
  )
}

export default Hero
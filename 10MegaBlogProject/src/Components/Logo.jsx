import React from 'react'
import logoImage from '../assets/logo.png'

function Logo({width= '100px'}) {
  return (
    <div className='transition-all duration-300 hover:drop-shadow-[0_0_12px_rgba(139,92,246,0.5)]'>
      <img src={logoImage} alt="MegaBlog Logo" style={{ width, maxWidth: '100%', height: 'auto' }} />
    </div>
  )
}

export default Logo

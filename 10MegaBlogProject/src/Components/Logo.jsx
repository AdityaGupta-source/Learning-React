import React from 'react'
import logoImage from '../assets/logo.png'

function Logo({width= '100px'}) {
  return (
    <div>
      <img src={logoImage} alt="Logo" style={{ width, maxWidth: '100%', height: 'auto' }} />
    </div>
  )
}

export default Logo

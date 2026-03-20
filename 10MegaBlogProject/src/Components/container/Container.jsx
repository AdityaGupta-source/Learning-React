import React from 'react'

function Container({children}) {
  return (
    <div className='mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12'>
      {children}
    </div>
  )
}

export default Container

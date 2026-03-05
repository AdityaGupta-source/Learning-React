import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
  const {userid} = useParams();
  return (
    <div className='flex w-full items-center justify-center'>
      <div className='bg-gray-500 text-white px-4 py-2 text-center max-w-md text-2xl'>
        user: {userid}
      </div>
    </div>
  )
}

export default User

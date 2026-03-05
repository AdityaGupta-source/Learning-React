import React from 'react'
import UserContext from '../Context/UserContext'
import { useContext } from 'react'
function Profile() {
  const {user} = useContext(UserContext)

  if(!user) return <div>Please login</div>
  
  return <h1>Welcome {user.username}</h1>
}

export default Profile

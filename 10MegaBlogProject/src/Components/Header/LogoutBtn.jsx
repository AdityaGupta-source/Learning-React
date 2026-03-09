import React from 'react'
import { useDispatch } from 'react-redux'
import authServices from '../../appwrite/auth'
import { logout } from '../../Store/authSlice'
function LogoutBtn() {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    authServices.logout()
    .then(() => {dispatch(logout())})
    .catch((err) => console.log(err))
  }
  return (
    <div>
      <button className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>Logout</button>
    </div>
  )
}

export default LogoutBtn

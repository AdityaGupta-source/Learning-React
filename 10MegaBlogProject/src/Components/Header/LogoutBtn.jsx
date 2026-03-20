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
    <button 
      onClick={logoutHandler}  
      className='px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm md:text-base font-semibold rounded-lg transition-all duration-300 cursor-pointer hover:shadow-lg active:scale-95 w-full md:w-auto'
      style={{ 
        border: '1px solid rgba(139, 92, 246, 0.5)',
        color: '#c4b5fd',
        background: 'transparent'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'linear-gradient(135deg, #8b5cf6, #3b82f6)';
        e.currentTarget.style.color = '#ffffff';
        e.currentTarget.style.borderColor = 'transparent';
        e.currentTarget.style.boxShadow = '0 8px 20px rgba(139, 92, 246, 0.4)';
        e.currentTarget.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'transparent';
        e.currentTarget.style.color = '#c4b5fd';
        e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.5)';
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      Logout
    </button>
  )
}

export default LogoutBtn

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
      <button 
        onClick={logoutHandler}  
        className='px-6 py-2.5 text-base font-medium rounded-lg transition-all duration-300 cursor-pointer'
        style={{ 
          border: '1px solid rgba(139, 92, 246, 0.5)',
          color: '#c4b5fd',
          background: 'transparent'
        }}
        onMouseEnter={(e) => {
          e.target.style.background = 'linear-gradient(135deg, #8b5cf6, #3b82f6)';
          e.target.style.color = '#ffffff';
          e.target.style.borderColor = 'transparent';
          e.target.style.boxShadow = '0 4px 15px rgba(139, 92, 246, 0.3)';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = 'transparent';
          e.target.style.color = '#c4b5fd';
          e.target.style.borderColor = 'rgba(139, 92, 246, 0.5)';
          e.target.style.boxShadow = 'none';
        }}
      >
        Logout
      </button>
    </div>
  )
}

export default LogoutBtn

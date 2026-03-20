import { useState,useEffect } from 'react'
import authServices, {AuthServices} from './appwrite/auth'
import {login,logout} from './Store/authSlice'
import { useDispatch } from 'react-redux'
import { Header, Footer } from './Components'
import {Outlet} from 'react-router-dom'

function App() {
  const [loading,setLoading] = useState(true);
  const dispatch = useDispatch();
  
  useEffect(() => {
    authServices.getCurrentUser()
    .then((userData) => {
      if(userData){
        dispatch(login({userData}))
      } else{
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  },[dispatch])

  return !loading ?  
    <div className='min-h-screen w-full flex flex-col' style={{ backgroundColor: '#0f172a' }}> 
      <Header />
      <main className='flex-1'>
        <Outlet />
      </main>
      <Footer />
    </div>
      : (
        <div className='min-h-screen flex items-center justify-center px-4' style={{ backgroundColor: '#0f172a' }}>
          <div className='flex flex-col items-center gap-3 md:gap-4'>
            <div 
              className='w-10 md:w-12 h-10 md:h-12 rounded-full border-4 border-transparent'
              style={{ 
                borderTopColor: '#8b5cf6', 
                borderRightColor: '#3b82f6',
                animation: 'spin 1s linear infinite' 
              }}
            />
            <p style={{ color: '#94a3b8' }} className='text-xs md:text-sm font-medium'>Loading MegaBlog...</p>
          </div>
        </div>
      )
  
}

export default App

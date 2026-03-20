import React from 'react'
import {Container,Logo,LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state) => state.auth.status) ?? false;
  const navigate = useNavigate();
  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]
  return (
    <header 
      className='sticky top-0 z-50 w-full'
      style={{ 
        backgroundColor: 'rgba(15, 23, 42, 0.9)', 
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(148, 163, 184, 0.1)'
      }}
    >
      {/* Gradient accent line */}
      <div 
        className='h-[3px] w-full' 
        style={{ background: 'linear-gradient(90deg, #8b5cf6, #3b82f6, #8b5cf6)' }} 
      />
      <Container>
        <nav className='flex items-center justify-between py-5'>
          <Link to='/' className='flex items-center gap-3 group'>
            <Logo width="70px" />
          </Link>
          <ul className='flex items-center gap-2'>
            {navItems.map((item) => 
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className='px-6 py-2.5 text-base font-medium rounded-lg transition-all duration-300'
                    style={{ color: '#cbd5e1' }}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'rgba(139, 92, 246, 0.15)';
                      e.target.style.color = '#e2e8f0';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'transparent';
                      e.target.style.color = '#cbd5e1';
                    }}
                  >{item.name}</button>
                </li>
              ) : null
            )}
            {
              authStatus && (
                <li className='ml-3'>
                  <LogoutBtn />
                </li>
              )
            }
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header
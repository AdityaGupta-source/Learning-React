import React, { useState } from 'react'
import {Container,Logo,LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state) => state.auth.status) ?? false;
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const handleNavClick = (slug) => {
    navigate(slug);
    setMobileMenuOpen(false);
  }

  return (
    <header 
      className='sticky top-0 z-50 w-full'
      style={{ 
        backgroundColor: 'rgba(15, 23, 42, 0.95)', 
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(148, 163, 184, 0.1)'
      }}
    >
      {/* Gradient accent line */}
      <div 
        className='h-[2px] md:h-[3px] w-full' 
        style={{ background: 'linear-gradient(90deg, #8b5cf6, #3b82f6, #8b5cf6)' }} 
      />
      
      <Container>
        <nav className='flex items-center justify-between py-4 md:py-5'>
          {/* Logo */}
          <Link to='/' className='flex items-center gap-3 group flex-shrink-0'>
            <Logo width="clamp(50px, 8vw, 70px)" />
          </Link>

          {/* Desktop Navigation */}
          <ul className='hidden md:flex items-center gap-1 lg:gap-2'>
            {navItems.map((item) => 
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className='px-4 lg:px-6 py-2 lg:py-2.5 text-sm lg:text-base font-medium rounded-lg transition-all duration-300'
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
                <li className='ml-2 lg:ml-3'>
                  <LogoutBtn />
                </li>
              )
            }
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className='md:hidden flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-300'
            style={{ 
              backgroundColor: mobileMenuOpen ? 'rgba(139, 92, 246, 0.15)' : 'transparent',
              color: '#cbd5e1'
            }}
          >
            <svg className='w-6 h-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
              {!mobileMenuOpen ? (
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
              ) : (
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div 
            className='md:hidden pb-4 animate-slideInRight'
            style={{
              borderTop: '1px solid rgba(148, 163, 184, 0.1)',
              paddingTop: '1rem'
            }}
          >
            <ul className='flex flex-col gap-2'>
              {navItems.map((item) => 
                item.active ? (
                  <li key={item.name}>
                    <button
                      onClick={() => handleNavClick(item.slug)}
                      className='w-full text-left px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-300'
                      style={{ 
                        color: '#cbd5e1',
                        backgroundColor: 'rgba(139, 92, 246, 0.1)'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = 'rgba(139, 92, 246, 0.2)';
                        e.target.style.color = '#e2e8f0';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'rgba(139, 92, 246, 0.1)';
                        e.target.style.color = '#cbd5e1';
                      }}
                    >{item.name}</button>
                  </li>
                ) : null
              )}
              {
                authStatus && (
                  <li className='pt-2 border-t' style={{ borderColor: 'rgba(148, 163, 184, 0.1)' }}>
                    <LogoutBtn />
                  </li>
                )
              }
            </ul>
          </div>
        )}
      </Container>
    </header>
  )
}

export default Header
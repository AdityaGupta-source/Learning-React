import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  const linkClass = "text-xs sm:text-sm md:text-base font-medium transition-all duration-300 hover:translate-x-1"
  
  return (
    <section 
      className="relative overflow-hidden py-8 md:py-12 lg:py-16"
      style={{ 
        backgroundColor: '#0f172a',
        borderTop: '1px solid rgba(148, 163, 184, 0.1)'
      }}
    >
        {/* Gradient accent line at top */}
        <div 
          className='absolute top-0 left-0 h-[2px] md:h-[3px] w-full' 
          style={{ background: 'linear-gradient(90deg, #8b5cf6, #3b82f6, #8b5cf6)' }} 
        />
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-8">
                {/* Logo Section */}
                <div className="lg:col-span-1">
                    <div className="flex flex-col justify-between h-full">
                        <div className="mb-4 md:mb-6 inline-flex items-center">
                            <Logo width="clamp(60px, 12vw, 80px)" />
                        </div>
                        <div>
                            <p className="text-xs sm:text-sm" style={{ color: '#64748b' }}>
                                &copy; 2026 MegaBlog. All Rights Reserved.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Company Links */}
                <div>
                    <h3 
                      className="text-xs md:text-sm font-semibold uppercase tracking-wider mb-4 md:mb-6"
                      style={{ color: '#8b5cf6' }}
                    >
                        Company
                    </h3>
                    <ul className="space-y-2 md:space-y-3">
                        <li>
                            <Link
                                className={linkClass}
                                style={{ color: '#94a3b8' }}
                                onMouseEnter={(e) => e.target.style.color = '#e2e8f0'}
                                onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
                                to="/"
                            >
                                Features
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={linkClass}
                                style={{ color: '#94a3b8' }}
                                onMouseEnter={(e) => e.target.style.color = '#e2e8f0'}
                                onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
                                to="/"
                            >
                                Pricing
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={linkClass}
                                style={{ color: '#94a3b8' }}
                                onMouseEnter={(e) => e.target.style.color = '#e2e8f0'}
                                onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
                                to="/"
                            >
                                Affiliate Program
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={linkClass}
                                style={{ color: '#94a3b8' }}
                                onMouseEnter={(e) => e.target.style.color = '#e2e8f0'}
                                onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
                                to="/"
                            >
                                Press Kit
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Support Links */}
                <div>
                    <h3 
                      className="text-xs md:text-sm font-semibold uppercase tracking-wider mb-4 md:mb-6"
                      style={{ color: '#8b5cf6' }}
                    >
                        Support
                    </h3>
                    <ul className="space-y-2 md:space-y-3">
                        <li>
                            <Link
                                className={linkClass}
                                style={{ color: '#94a3b8' }}
                                onMouseEnter={(e) => e.target.style.color = '#e2e8f0'}
                                onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
                                to="/"
                            >
                                Account
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={linkClass}
                                style={{ color: '#94a3b8' }}
                                onMouseEnter={(e) => e.target.style.color = '#e2e8f0'}
                                onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
                                to="/"
                            >
                                Help
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={linkClass}
                                style={{ color: '#94a3b8' }}
                                onMouseEnter={(e) => e.target.style.color = '#e2e8f0'}
                                onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
                                to="/"
                            >
                                Contact Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={linkClass}
                                style={{ color: '#94a3b8' }}
                                onMouseEnter={(e) => e.target.style.color = '#e2e8f0'}
                                onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
                                to="/"
                            >
                                Customer Support
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Legal Links */}
                <div>
                    <h3 
                      className="text-xs md:text-sm font-semibold uppercase tracking-wider mb-4 md:mb-6"
                      style={{ color: '#8b5cf6' }}
                    >
                        Legals
                    </h3>
                    <ul className="space-y-2 md:space-y-3">
                        <li>
                            <Link
                                className={linkClass}
                                style={{ color: '#94a3b8' }}
                                onMouseEnter={(e) => e.target.style.color = '#e2e8f0'}
                                onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
                                to="/"
                            >
                                Terms &amp; Conditions
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={linkClass}
                                style={{ color: '#94a3b8' }}
                                onMouseEnter={(e) => e.target.style.color = '#e2e8f0'}
                                onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
                                to="/"
                            >
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={linkClass}
                                style={{ color: '#94a3b8' }}
                                onMouseEnter={(e) => e.target.style.color = '#e2e8f0'}
                                onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
                                to="/"
                            >
                                Licensing
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer
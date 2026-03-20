import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
        <section 
          className="relative overflow-hidden py-10"
          style={{ 
            backgroundColor: '#0f172a',
            borderTop: '1px solid rgba(148, 163, 184, 0.1)'
          }}
        >
            {/* Gradient accent line at top */}
            <div 
              className='absolute top-0 left-0 h-[2px] w-full' 
              style={{ background: 'linear-gradient(90deg, #8b5cf6, #3b82f6, #8b5cf6)' }} 
            />
            <div className="relative z-10 mx-auto max-w-7xl px-4">
                <div className="-m-6 flex flex-wrap">
                    <div className="w-full p-6 md:w-1/2 lg:w-5/12">
                        <div className="flex h-full flex-col justify-between">
                            <div className="mb-4 inline-flex items-center">
                                <Logo width="80px" />
                            </div>
                            <div>
                                <p className="text-sm" style={{ color: '#64748b' }}>
                                    &copy; 2026 MegaBlog. All Rights Reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 
                              className="tracking-px mb-9 text-xs font-semibold uppercase"
                              style={{ color: '#8b5cf6' }}
                            >
                                Company
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link
                                        className="text-base font-medium transition-colors duration-200"
                                        style={{ color: '#94a3b8' }}
                                        onMouseEnter={(e) => e.target.style.color = '#e2e8f0'}
                                        onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
                                        to="/"
                                    >
                                        Features
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className="text-base font-medium transition-colors duration-200"
                                        style={{ color: '#94a3b8' }}
                                        onMouseEnter={(e) => e.target.style.color = '#e2e8f0'}
                                        onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
                                        to="/"
                                    >
                                        Pricing
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className="text-base font-medium transition-colors duration-200"
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
                                        className="text-base font-medium transition-colors duration-200"
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
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 
                              className="tracking-px mb-9 text-xs font-semibold uppercase"
                              style={{ color: '#8b5cf6' }}
                            >
                                Support
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link
                                        className="text-base font-medium transition-colors duration-200"
                                        style={{ color: '#94a3b8' }}
                                        onMouseEnter={(e) => e.target.style.color = '#e2e8f0'}
                                        onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
                                        to="/"
                                    >
                                        Account
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className="text-base font-medium transition-colors duration-200"
                                        style={{ color: '#94a3b8' }}
                                        onMouseEnter={(e) => e.target.style.color = '#e2e8f0'}
                                        onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
                                        to="/"
                                    >
                                        Help
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className="text-base font-medium transition-colors duration-200"
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
                                        className="text-base font-medium transition-colors duration-200"
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
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-3/12">
                        <div className="h-full">
                            <h3 
                              className="tracking-px mb-9 text-xs font-semibold uppercase"
                              style={{ color: '#8b5cf6' }}
                            >
                                Legals
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link
                                        className="text-base font-medium transition-colors duration-200"
                                        style={{ color: '#94a3b8' }}
                                        onMouseEnter={(e) => e.target.style.color = '#e2e8f0'}
                                        onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
                                        to="/"
                                    >
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className="text-base font-medium transition-colors duration-200"
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
                                        className="text-base font-medium transition-colors duration-200"
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
            </div>
        </section>
  )
}

export default Footer
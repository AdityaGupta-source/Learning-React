import React from 'react'
import appwriteService from '../appwrite/config'
import { Link } from 'react-router-dom'

function PostCard({$id,title,featuredImage}) {
  return (
    <Link to={`/post/${$id}`} className='group h-full'>
      <div 
        className='w-full h-full rounded-xl md:rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] md:hover:scale-[1.03] hover-lift flex flex-col'
        style={{ 
          backgroundColor: 'rgba(30, 41, 59, 0.7)',
          border: '1px solid rgba(148, 163, 184, 0.1)',
          backdropFilter: 'blur(10px)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.3)';
          e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3), 0 0 30px rgba(139, 92, 246, 0.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'rgba(148, 163, 184, 0.1)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        {/* Image Container */}
        <div className='w-full h-40 sm:h-48 md:h-56 overflow-hidden relative bg-gradient-to-br from-slate-700 to-slate-900'>
          <img 
            src={appwriteService.getFilePreview(featuredImage)} 
            alt={title} 
            className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
            loading='lazy'
          />
          {/* Overlay gradient */}
          <div 
            className='absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300'
          />
        </div>

        {/* Content Container */}
        <div className='p-4 sm:p-5 md:p-6 flex-grow flex flex-col justify-between'>
          <h2 
            className='font-semibold text-sm sm:text-base md:text-lg leading-snug line-clamp-2 transition-colors duration-300 group-hover:text-purple-300'
            style={{ color: '#f1f5f9' }}
          >
            {title}
          </h2>
          
          {/* Read more indicator */}
          <div className='mt-3 sm:mt-4 flex items-center gap-2 text-xs sm:text-sm font-medium' style={{ color: '#8b5cf6' }}>
            <span>Read more</span>
            <svg className='w-4 h-4 transform transition-transform group-hover:translate-x-1' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default PostCard

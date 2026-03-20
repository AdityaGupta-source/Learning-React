import React from 'react'
import appwriteService from '../appwrite/config'
import { Link } from 'react-router-dom'

function PostCard({$id,title,featuredImage}) {
  return (
    <Link to={`/post/${$id}`}>
      <div 
        className='w-full rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl'
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
        <div className='w-full h-56 overflow-hidden'>
          <img 
            src={appwriteService.getFilePreview(featuredImage)} 
            alt={title} 
            className='w-full h-full object-cover transition-transform duration-500 hover:scale-110'
          />
        </div>
        <div className='p-5 text-center'>
          <h2 
            className='font-semibold text-lg leading-snug line-clamp-2'
            style={{ color: '#f1f5f9' }}
          >
            {title}
          </h2>
        </div>
      </div>
    </Link>
  )
}

export default PostCard

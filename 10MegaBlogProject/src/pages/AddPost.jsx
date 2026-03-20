import React from 'react'
import {Container,PostForm} from '../Components/index'

function AddPost() {
  return (
    <div className='py-6 md:py-10 lg:py-16'>
      <Container>
        <div className='mb-6 md:mb-8 lg:mb-10 text-center flex flex-col items-center px-4'>
          <h2 
            className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-3 lg:mb-4 animate-fadeInUp'
            style={{ color: '#f1f5f9' }}
          >
            Create New Post
          </h2>
          <div 
            className='w-12 sm:w-16 md:w-20 h-1 rounded-full animate-fadeInUp' 
            style={{ background: 'linear-gradient(90deg, #8b5cf6, #3b82f6)' }}
          />
        </div>
        <div className='px-4 sm:px-0'>
          <PostForm />
        </div>
      </Container>
    </div>
  )
}

export default AddPost

import React from 'react'
import {Container,PostForm} from '../Components/index'

function AddPost() {
  return (
    <div className='py-10'>
      <Container>
        <div className='mb-8 text-center flex flex-col items-center'>
          <h2 
            className='text-3xl font-bold mb-2'
            style={{ color: '#f1f5f9' }}
          >
            Create New Post
          </h2>
          <div 
            className='w-20 h-1 rounded-full' 
            style={{ background: 'linear-gradient(90deg, #8b5cf6, #3b82f6)' }}
          />
        </div>
        <PostForm />
      </Container>

    </div>
  )
}

export default AddPost

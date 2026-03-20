import React from 'react'
import appwriteService from '../appwrite/config'
import { useEffect, useState } from 'react'
import { Container, PostCard} from '../Components'

function AllPosts() {
  const [posts, setPosts] = useState([])
  
  useEffect(() => {
    appwriteService.getPosts([]).then(posts => {
      if(posts){
        setPosts(posts.documents)
      }
    })
  },[])

  return (
    <div className='w-full py-8 md:py-12 lg:py-16'>
      <Container>
        <div className='mb-8 sm:mb-10 md:mb-12 lg:mb-16 text-center flex flex-col items-center px-4'>
          <h2 
            className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 animate-fadeInUp'
            style={{ color: '#f1f5f9' }}
          >
            All Posts
          </h2>
          <div 
            className='w-16 sm:w-20 h-1 rounded-full animate-fadeInUp' 
            style={{ background: 'linear-gradient(90deg, #8b5cf6, #3b82f6)' }}
          />
        </div>
        
        {posts.length === 0 ? (
          <div className='text-center py-12 md:py-20'>
            <p className='text-base md:text-lg' style={{ color: '#94a3b8' }}>
              No posts yet. Be the first to share your story!
            </p>
          </div>
        ) : (
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-4 sm:px-0'>
            {posts.map((post, index) => {
              return (
                <div key={post.$id} style={{ animation: `fadeInUp 0.6s ease-out forwards`, animationDelay: `${index * 0.1}s` }}>
                  <PostCard {...post} />
                </div>
              )
            })}
          </div>
        )}
      </Container>     
    </div>
  )
}

export default AllPosts

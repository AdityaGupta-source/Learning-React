import React from 'react'
import appwriteService from '../appwrite/config'
import { useEffect,useState } from 'react'
import { Container, PostCard} from '../Components'

function AllPosts() {
  const [posts,setPosts] = useState([])
  useEffect(() => {
    appwriteService.getPosts([]).then(posts => {
      if(posts){
        setPosts(posts.documents)
      }
    })
  },[])
  return (
    <div className='w-full py-12'>
      <Container>
        <div className='mb-10 text-center flex flex-col items-center'>
          <h2 
            className='text-3xl font-bold mb-2'
            style={{ color: '#f1f5f9' }}
          >
            All Posts
          </h2>
          <div 
            className='w-20 h-1 rounded-full' 
            style={{ background: 'linear-gradient(90deg, #8b5cf6, #3b82f6)' }}
          />
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {posts.map((post) => {
            return (
              <div key={post.$id} style={{ animation: 'fadeInUp 0.5s ease forwards' }}>
                <PostCard {...post} />
              </div>
            )
          })}
        </div>
      </Container>     
    </div>
  )
}

export default AllPosts

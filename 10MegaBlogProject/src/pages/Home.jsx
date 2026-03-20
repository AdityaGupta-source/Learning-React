
import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/config";
import {Container, PostCard} from '../Components'

function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
  
    if (posts.length === 0) {
        return (
            <div className="w-full py-16 text-center">
                <Container>
                    <div className="flex flex-col items-center justify-center py-20">
                        {/* Decorative icon */}
                        <div 
                          className="w-20 h-20 rounded-2xl flex items-center justify-center mb-8"
                          style={{ 
                            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2))',
                            border: '1px solid rgba(139, 92, 246, 0.2)'
                          }}
                        >
                          <svg className="w-10 h-10" style={{ color: '#8b5cf6' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                          </svg>
                        </div>
                        <h1 
                          className="text-4xl font-bold mb-4 bg-clip-text text-transparent"
                          style={{ backgroundImage: 'linear-gradient(135deg, #8b5cf6, #3b82f6)' }}
                        >
                            Welcome to MegaBlog
                        </h1>
                        <p className="text-lg max-w-md" style={{ color: '#94a3b8' }}>
                            Login to see posts or start creating your own stories.
                        </p>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className='w-full py-14'>
            <Container>
                <div className='mb-10 text-center flex flex-col items-center'>
                    <h2 
                      className='text-3xl font-bold mb-2'
                      style={{ color: '#f1f5f9' }}
                    >
                      Latest Posts
                    </h2>
                    <div 
                      className='w-20 h-1 rounded-full' 
                      style={{ background: 'linear-gradient(90deg, #8b5cf6, #3b82f6)' }}
                    />
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {posts.map((post) => (
                        <div key={post.$id} style={{ animation: 'fadeInUp 0.5s ease forwards' }}>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home

import React ,{useEffect,useState} from 'react'
import { Container,PostForm } from '../Components'
import { useNavigate,useParams } from 'react-router-dom'
import appwriteService from '../appwrite/config'

function EditPost() {
  const {slug} = useParams()
  const navigate = useNavigate()
  const [post,setPosts]  = useState(null)
  
  useEffect(() => {
    if(slug){
      appwriteService.getPost(slug).then(post => {
        if(post){
          setPosts(post)
        } 
      })
    } else{
      navigate("/")
    }
  },[slug , navigate])

  if (!post) {
    return (
      <div className="py-16 text-center">
        <Container>
          <p style={{ color: '#94a3b8' }}>Loading...</p>
        </Container>
      </div>
    );
  }

  return (
    <div className='py-6 md:py-10 lg:py-16'>
      <Container>
        <div className='mb-6 md:mb-8 lg:mb-10 text-center flex flex-col items-center px-4'>
          <h2 
            className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-3 lg:mb-4 animate-fadeInUp'
            style={{ color: '#f1f5f9' }}
          >
            Edit Post
          </h2>
          <div 
            className='w-12 sm:w-16 md:w-20 h-1 rounded-full animate-fadeInUp' 
            style={{ background: 'linear-gradient(90deg, #8b5cf6, #3b82f6)' }}
          />
        </div>
        <div className='px-4 sm:px-0'>
          <PostForm post={post} />
        </div>
      </Container>
    </div>
  )
}

export default EditPost

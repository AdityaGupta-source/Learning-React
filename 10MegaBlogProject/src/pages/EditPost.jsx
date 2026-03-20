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
  return post ? (
    <div className='py-10'>
      <Container>
        <div className='mb-8 text-center flex flex-col items-center'>
          <h2 
            className='text-3xl font-bold mb-2'
            style={{ color: '#f1f5f9' }}
          >
            Edit Post
          </h2>
          <div 
            className='w-20 h-1 rounded-full' 
            style={{ background: 'linear-gradient(90deg, #8b5cf6, #3b82f6)' }}
          />
        </div>
        <PostForm post={post} />
      </Container>
    </div>
  ) : null
}

export default EditPost

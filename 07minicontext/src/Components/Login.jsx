import React from 'react'
import { useState,useContext } from 'react'
import UserContext from '../Context/UserContext'
function Login() {
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');

  const {setUser} = useContext(UserContext)
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({username,password})

  }
  return (
    <div>
      <h1>Login</h1>
      <input type="text" placeholder='username' onChange={(e) => setUsername(e.target.value)} value={username} />
      <input type="text" placeholder='password' onChange={(e) => setPassword(e.target.value)} value={password}/>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login

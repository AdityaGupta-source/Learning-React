import React from 'react'
import { useEffect, useState } from 'react'
function Github() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://api.github.com/users/AdityaGupta-source')
    .then(response => response.json())
    .then(response => {setData(response)})
  },[])
  return (
    <div>
      <h1 className='bg-slate-500 text-white m-3 p-4 text-center text-2xl'>Github Followers: {data.followers}</h1>
    </div>
  )
}

export default Github

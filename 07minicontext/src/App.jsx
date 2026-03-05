import React from 'react'
import Login from './Components/login'
import Profile from './Components/Profile'
import UserContextProvider from './Context/UserContextProvider'

function App() {
  return (
    <UserContextProvider>
      <h1>Hello world</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App

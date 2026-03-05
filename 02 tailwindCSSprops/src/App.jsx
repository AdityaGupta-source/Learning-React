import { useState } from 'react'
import './App.css'
import Card from './Components/Card'

function App() {

  return (
    <>
      <h1 className='bg-red-300'>Hello Coders</h1>
      <Card name="Aditya Gupta" price={30}/>
      <Card name="Anmol Gupta" price={20}/>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'

function App() {
  const [counter,setCounter] = useState(0);
  const addOne = () => {
    if(counter>=20){
      setCounter(counter)
    }
    else{
      setCounter(counter+1)
    }
  }
  const decOne = () => {
    if(counter<=0){
      setCounter(counter)
    }
    else
    setCounter(counter-1)
  }
  return (
    <>
      <h1>count: {counter}</h1>
      <button onClick={addOne}>Add One</button>
      <br />
      <button onClick={decOne}>Decrease One</button>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import AddTodo from './Components/AddTodo'
import Todo from './Components/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='text-2xl'>Enter your todo here</div>
      <AddTodo />
      <Todo />
    </>
  )
}

export default App

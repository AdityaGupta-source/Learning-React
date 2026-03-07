import { useEffect } from 'react'
import './App.css'
import AddTodo from './Components/AddTodo'
import Todo from './Components/Todo'
import { useSelector } from 'react-redux'

function App() {
  const todos = useSelector(state => state.todos)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <div className='min-h-screen bg-gray-900 flex items-center justify-center p-4 w-screen'>
      <div className='bg-gray-800 shadow-2xl rounded-3xl p-8 w-full max-w-2xl border border-gray-700'>
        <h1 className='text-4xl font-bold text-center text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-amber-600 mb-8'>
          Manage Your Todos
        </h1>
        <AddTodo />
        <div className="mt-8">
          <Todo />
        </div>
      </div>
    </div>
  )
}

export default App

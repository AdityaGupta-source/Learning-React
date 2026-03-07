import React from 'react'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import {addTodo} from '../Features/Todos/todoSlice'

function AddTodo() {
  const [input,setInput] = useState("")
  const dispatch = useDispatch();
  const addTodoHandler = (e) => {
    e.preventDefault();
    console.log(input)
    dispatch(addTodo(input));
    console.log(input)
    setInput('');
  }
  return (
    <form  onSubmit={addTodoHandler} className='m-3'>
      <input 
      type="text" 
      className='bg-gray-700 text-white max-w-full w-md outline-none border-black rounded py-3 px-2 text-xl '
      placeholder='Enter todo'
      value={input}
      onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className='rounded px-4 py-2 m-2 bg-amber-500 text-white text-2xl cursor-pointer hover:bg-amber-300 transition-transform hover:-translate-y-0.5 shadow-lg '>Add</button>

    </form>
  )
}

export default AddTodo

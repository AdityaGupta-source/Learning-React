import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { FaEdit } from "react-icons/fa";
import { removeTodo,updateTodo } from '../Features/Todos/todoSlice'

function Todo() {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch();
  return (
    <div className='w-full flex justify-center h-auto'>
      <div className='w-lg bg-red-300 p-4'>
        <div className='h-auto  flex flex-col gap-3 items-center justify-between ' >
          {todos.map((todo) => (
            <li key={todo.id} className='bg-amber-400 flex justify-between w-md px-4 py-2 text-black' >
              <span>{todo.text}</span>
              <div className='gap-3'>
                <button className='mx-2 cursor-pointer ' onClick={() => dispatch(updateTodo(todo.id))}><FaEdit /></button>
                <button className='cursor-pointer hover:underline hover:text-red-600 text-red-400' onClick={() => dispatch(removeTodo(todo.id))}>X</button>
              </div>
            </li>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Todo

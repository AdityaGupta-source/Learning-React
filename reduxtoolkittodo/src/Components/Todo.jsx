import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";
import { removeTodo, setCurrentEdit } from '../Features/Todos/todoSlice'

function Todo() {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch();
  return (
    <div className='w-full'>
      {todos.length === 0 ? (
        <div className="text-center text-gray-500 mt-8 italic text-lg">No tasks yet. Add one above!</div>
      ) : (
        <ul className='flex flex-col gap-4 w-full'>
          {todos.map((todo) => (
            <li
              key={todo.id}
              className='bg-gray-700/50 backdrop-blur-sm border border-gray-600 flex justify-between items-center w-full px-6 py-4 text-gray-100 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20 hover:border-gray-500 hover:bg-gray-700 group'
            >
              <span className="text-lg font-medium tracking-wide break-all mr-4">{todo.text}</span>
              <div className='flex gap-4 items-center opacity-80 group-hover:opacity-100 transition-opacity'>
                <button
                  title="Edit Todo"
                  className='p-2 cursor-pointer text-amber-500 transition-all duration-300 hover:scale-125 hover:text-amber-400 bg-gray-800 rounded-lg hover:bg-gray-900 shadow-sm'
                  onClick={() => dispatch(setCurrentEdit(todo))}
                >
                  <FaEdit size={18} />
                </button>
                <button
                  title="Delete Todo"
                  className='p-2 cursor-pointer text-red-500 transition-all duration-300 hover:scale-125 hover:text-red-400 bg-gray-800 rounded-lg hover:bg-gray-900 shadow-sm'
                  onClick={() => dispatch(removeTodo(todo.id))}
                >
                  <FaTrash size={18} />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Todo

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { addTodo, setCurrentEdit, updateTodo } from '../Features/Todos/todoSlice'

function AddTodo() {
  const [input, setInput] = useState("")
  const [validTodo, setValidTodo] = useState(true)
  const dispatch = useDispatch();
  const currentEdit = useSelector(state => state.currentEdit)

  useEffect(() => {
    if (currentEdit) {
      setInput(currentEdit.text)
    }
  }, [currentEdit])

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (currentEdit) {
      dispatch(updateTodo({ id: currentEdit.id, text: input }));
      dispatch(setCurrentEdit(null));
    }
    else {
      if (input.trim()) {
        dispatch(addTodo(input.trim()));
        setValidTodo(true);
      }
      else {
        setValidTodo(false)
      }
    }
    setInput('');
  }

  return (
    <form onSubmit={addTodoHandler} className='flex flex-col sm:flex-row gap-4 w-full justify-center'>
      <div className="relative w-full sm:flex-1">
        <input
          type="text"
          className={`w-full bg-gray-700 text-gray-100 outline-none rounded-xl py-3 px-4 text-lg transition-all duration-300 ${!validTodo ? 'border-2 border-red-500 bg-red-900/20 placeholder-red-400' : 'border-2 border-gray-600 focus:border-amber-500 focus:bg-gray-700/80 shadow-inner'}`}
          placeholder={validTodo ? 'What needs to be done?' : 'Please enter a valid todo'}
          value={input}
          onChange={(e) => {
            setInput(e.target.value)
            setValidTodo(true)
          }}
        />
      </div>
      <button
        type="submit"
        className='rounded-xl px-8 py-3 bg-linear-to-r from-amber-500 to-amber-600 text-white font-semibold text-lg cursor-pointer hover:from-amber-400 hover:to-amber-500 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-amber-500/25 active:translate-y-0 disabled:opacity-50 min-w-[120px]'
      >
        {currentEdit ? "Update" : "Add"}
      </button>
    </form>
  )
}

export default AddTodo

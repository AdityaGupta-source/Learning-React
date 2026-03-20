import React from 'react'
import { useId } from 'react'

const Input = React.forwardRef(function Input({
  type = 'text',
  label,
  className = '',

  ...props
},ref){
  const id = useId();
  return (
    <div>
      {label && <label
        htmlFor={id}
        className='inline-block mb-1 pl-1 text-sm font-medium'
        style={{ color: '#cbd5e1' }}>
        {label}
        </label>}
        <input 
          type = {type}
          className={`px-4 py-2.5 rounded-lg outline-none duration-300 w-full text-sm ${className}`}
          style={{
            backgroundColor: '#1e293b',
            color: '#f1f5f9',
            border: '1px solid rgba(148, 163, 184, 0.2)',
          }}
          onFocus={(e) => {
            e.target.style.borderColor = '#8b5cf6';
            e.target.style.boxShadow = '0 0 0 3px rgba(139, 92, 246, 0.15)';
          }}
          onBlur={(e) => {
            e.target.style.borderColor = 'rgba(148, 163, 184, 0.2)';
            e.target.style.boxShadow = 'none';
          }}
          ref = {ref}
          id={id}
          {...props}
        />
    </div>
  )
})

export default Input

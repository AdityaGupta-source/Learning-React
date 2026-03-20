import React from 'react'
import { useId } from 'react'

function Select({
  label,
  options,
  className = "",
  ...props
},ref) {
  const id = useId();
  
  return (
    <div className='w-full'>
      { label && <label 
        htmlFor={id} 
        className='inline-block mb-2 pl-1 text-xs sm:text-sm font-medium transition-colors duration-300'
        style={{ color: '#cbd5e1' }}
      >{label}</label>}
      <select  
        {...props}
        ref={ref}
        className={`px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg outline-none duration-300 w-full text-sm sm:text-base cursor-pointer transition-all ${className}`}
        style={{
          backgroundColor: '#1e293b',
          color: '#f1f5f9',
          border: '1px solid rgba(148, 163, 184, 0.2)',
        }}
        onFocus={(e) => {
          e.currentTarget.style.borderColor = '#8b5cf6';
          e.currentTarget.style.boxShadow = '0 0 0 3px rgba(139, 92, 246, 0.15)';
          e.currentTarget.style.backgroundColor = 'rgba(30, 41, 59, 0.8)';
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = 'rgba(148, 163, 184, 0.2)';
          e.currentTarget.style.boxShadow = 'none';
          e.currentTarget.style.backgroundColor = '#1e293b';
        }}
        id={id}>
        {options?.map((option) => 
          <option key={option} value={option}>
            {option}
          </option>
        )}
      </select>
    </div>
  )
}

export default React.forwardRef(Select)

import React from 'react'

function Button({
    children,
    type = "button",
    bgColor = "",
    textColor = "",
    className = "",
    ...props

}) {
  const defaultStyle = !bgColor ? {
    background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)',
    color: '#ffffff',
    transition: 'all 0.3s ease',
  } : {};

  const colorClasses = bgColor ? `${bgColor} ${textColor || 'text-white'}` : '';

  return (
    <button 
      className={`px-5 py-2.5 rounded-lg font-semibold text-sm cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] ${colorClasses} ${className}`} 
      style={defaultStyle}
      onMouseEnter={(e) => {
        if (!bgColor) {
          e.currentTarget.style.boxShadow = '0 8px 25px rgba(139, 92, 246, 0.35)';
        }
      }}
      onMouseLeave={(e) => {
        if (!bgColor) {
          e.currentTarget.style.boxShadow = 'none';
        }
      }}
      type={type}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button

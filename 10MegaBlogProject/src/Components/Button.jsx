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
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  } : {};

  const colorClasses = bgColor ? `${bgColor} ${textColor || 'text-white'}` : '';

  return (
    <button 
      className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg font-semibold text-sm sm:text-base cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed ${colorClasses} ${className}`} 
      style={defaultStyle}
      onMouseEnter={(e) => {
        if (!bgColor) {
          e.currentTarget.style.boxShadow = '0 12px 28px rgba(139, 92, 246, 0.35)';
          e.currentTarget.style.transform = 'translateY(-2px)';
        }
      }}
      onMouseLeave={(e) => {
        if (!bgColor) {
          e.currentTarget.style.boxShadow = 'none';
          e.currentTarget.style.transform = 'translateY(0)';
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

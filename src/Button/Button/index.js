import React from 'react'

const Button = ({ className, color, size, disabled, children }) => {
  let buttonClass
  if (size) {
    buttonClass = `btn-${size}`
  }

  if (color) {
    buttonClass = buttonClass ? `${buttonClass} btn-${color}` : `btn-${color}`
  }

  if (className) {
    buttonClass = buttonClass ? `${buttonClass} ${className}` : className
  }

  return (
    <button className={buttonClass} disabled={disabled}>
      {children}
    </button>
  )
}

export default Button

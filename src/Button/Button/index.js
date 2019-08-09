import React from 'react'

const Button = ({ className, color, size, block, disabled, children }) => {
  let buttonClass
  if (size) {
    buttonClass = `btn-${size}`
  }

  if (block) {
    buttonClass = buttonClass ? `${buttonClass} btn-block` : 'btn-block'
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

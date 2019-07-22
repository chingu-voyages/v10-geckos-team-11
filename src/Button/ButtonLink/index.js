import React from 'react'

const ButtonLink = ({ className, color, size, href, children }) => {
  let buttonClass = 'paper-btn'
  if (size) {
    buttonClass = `${buttonClass} btn-${size}`
  }

  if (color) {
    buttonClass = `${buttonClass} btn-${color}`
  }

  if (className) {
    buttonClass = `${buttonClass} ${className}`
  }

  return (
    <a className={buttonClass} href={href}>
      {children}
    </a>
  )
}

export default ButtonLink

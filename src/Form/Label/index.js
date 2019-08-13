import React from 'react'

const Label = ({ children, className, check, radio, htmlFor }) => {
  let componentClass = className || ''

  if (check) {
    componentClass += ' paper-check'
  } else if (radio) {
    componentClass += ' paper-radio'
  }

  return (
    <label htmlFor={htmlFor} className={componentClass}>
      {children}
    </label>
  )
}

export default Label

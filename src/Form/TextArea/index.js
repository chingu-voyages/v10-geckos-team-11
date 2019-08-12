import React from 'react'

const TextArea = ({ noResize, placeholder, children, className }) => {
  let componentClass = className || ''

  if (noResize) {
    componentClass += ' no-resize'
  }

  return (
    <textarea className={componentClass} placeholder={placeholder}>
      {children}
    </textarea>
  )
}

export default TextArea

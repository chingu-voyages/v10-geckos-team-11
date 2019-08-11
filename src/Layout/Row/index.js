import React from 'react'

const Row = ({ className, children, flex }) => {
  let componentClass = 'row'

  if (flex) {
    componentClass += ` flex-${flex}`
  }

  if (className) {
    componentClass += ` ${className}`
  }

  return <div className={componentClass}>{children}</div>
}

export default Row

import React from 'react'

const Col = ({ col, sm, md, lg, align, className, children }) => {
  let componentClass = 'col'

  if (col) {
    componentClass += ` col-${col}`
  }

  if (sm) {
    componentClass += ` sm-${sm}`
  }

  if (md) {
    componentClass += ` md-${md}`
  }

  if (lg) {
    componentClass += ` lg-${lg}`
  }

  if (align) {
    componentClass += ` align-${align}`
  }

  if (className) {
    componentClass += ` ${className}`
  }

  return <div className={componentClass}>{children}</div>
}

export default Col

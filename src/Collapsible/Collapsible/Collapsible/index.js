import React from 'react'

const Collapsible = ({ className, children }) => {
  let collapsibleClassName = 'collapsible'
  if (className) {
    collapsibleClassName = `${collapsibleClassName} ${className}`
  }

  return <div className={collapsibleClassName}>{children}</div>
}

export default Collapsible

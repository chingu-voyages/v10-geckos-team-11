import React from 'react'

const CollapsibleBody = ({ children, className }) => {
  let collapsibleBodyClassName = 'collapsible-body'
  if (className) {
    collapsibleBodyClassName += ` ${className}`
  }

  return <div className={collapsibleBodyClassName}>{children}</div>
}

export default CollapsibleBody

import React from 'react'
import getClassNames from '../../../utilities/getClassNames'

const CollapsibleBody = ({
  children,
  className,
  color,
  bgColor,
  padding,
  margin
}) => {
  const collapsibleBodyClassName = getClassNames({
    className,
    color,
    bgColor,
    padding,
    margin,
    collapsibleBody: true
  })

  return <div className={collapsibleBodyClassName}>{children}</div>
}

export default CollapsibleBody

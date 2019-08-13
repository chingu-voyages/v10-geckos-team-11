import React from 'react'
import getClassNames from '../../utilities/getClassNames'

const CardHeader = ({
  children,
  className,
  color,
  bgColor,
  margin,
  padding
}) => {
  const cardHeaderClassName = getClassNames({
    className,
    color,
    bgColor,
    margin,
    padding,
    cardHeader: true
  })
  return <div className={cardHeaderClassName}>{children}</div>
}

export default CardHeader

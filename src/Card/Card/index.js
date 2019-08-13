import React from 'react'
import getClassNames from '../../utilities/getClassNames'

const Card = ({ className, children, color, bgColor, margin, padding }) => {
  const cardClassName = getClassNames({
    card: true,
    className,
    color,
    bgColor,
    margin,
    padding
  })
  return <div className={cardClassName}>{children}</div>
}

export default Card

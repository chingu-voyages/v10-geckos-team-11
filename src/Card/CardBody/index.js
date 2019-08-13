import React from 'react'
import getClassNames from '../../utilities/getClassNames'

const CardBody = ({ className, children, color, bgColor, margin, padding }) => {
  const cardBodyClassName = getClassNames({
    className,
    color,
    bgColor,
    margin,
    padding,
    cardBody: true
  })
  return <div className={cardBodyClassName}>{children}</div>
}

export default CardBody

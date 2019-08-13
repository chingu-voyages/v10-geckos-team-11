import React from 'react'
import getClassNames from '../../utilities/getClassNames'

const CardText = ({ className, children, color, bgColor, padding, margin }) => {
  const cardTextClassName = getClassNames({
    color,
    bgColor,
    padding,
    margin,
    cardText: true
  })
  return <p className={cardTextClassName}>{children}</p>
}

export default CardText

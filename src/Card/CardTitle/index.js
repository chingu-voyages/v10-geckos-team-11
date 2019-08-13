import React from 'react'
import getClassNames from '../../utilities/getClassNames'

const CardTitle = ({
  className,
  children,
  color,
  bgColor,
  padding,
  margin
}) => {
  const cardTitleClassName = getClassNames({
    className,
    color,
    bgColor,
    padding,
    margin,
    cardTitle: true
  })
  return <h4 className={cardTitleClassName}>{children}</h4>
}

export default CardTitle

import React from 'react'
import getClassNames from '../../utilities/getClassNames'

const CardSubtitle = ({
  className,
  children,
  color,
  bgColor,
  padding,
  margin
}) => {
  const cardSubtitleClassName = getClassNames({
    className,
    color,
    bgColor,
    padding,
    margin,
    cardSubtitle: true
  })
  return <h5 className={cardSubtitleClassName}>{children}</h5>
}

export default CardSubtitle

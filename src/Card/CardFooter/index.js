import React from 'react'
import getClassNames from '../../utilities/getClassNames'

const CardFooter = ({
  children,
  className,
  color,
  bgColor,
  margin,
  padding
}) => {
  const cardFooterClassName = getClassNames({
    className,
    color,
    bgColor,
    margin,
    padding,
    cardFooter: true
  })
  return <div className={cardFooterClassName}>{children}</div>
}

export default CardFooter

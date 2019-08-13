import React from 'react'
import getClassNames from '../../utilities/getClassNames'

const CardLink = ({
  href,
  className,
  children,
  color,
  bgColor,
  padding,
  margin
}) => {
  const cardLinkClassName = getClassNames({
    className,
    color,
    bgColor,
    padding,
    margin,
    cardLink: true
  })
  return (
    <a className={cardLinkClassName} href={href}>
      {children}
    </a>
  )
}

export default CardLink

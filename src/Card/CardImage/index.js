import React from 'react'
import getClassNames from '../../utilities/getClassNames'

const CardImage = ({ className, src, alt, bgColor, padding, margin }) => {
  return (
    <img
      className={getClassNames({ className, bgColor, padding, margin })}
      src={src}
      alt={alt}
    />
  )
}

export default CardImage

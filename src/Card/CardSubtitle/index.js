import React from 'react'

const CardSubtitle = ({ className, children }) => {
  return <h5 className={`card-subtitle ${className}`}>{children}</h5>
}

export default CardSubtitle

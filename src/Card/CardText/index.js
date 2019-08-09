import React from 'react'

const CardText = ({ className = '', children }) => {
  return <p className={`card-text ${className}`}>{children}</p>
}

export default CardText

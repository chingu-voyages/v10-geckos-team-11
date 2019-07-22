import React from 'react'

const CardTitle = ({ className = '', children }) => {
  return <h4 className={`card-title ${className}`}>{children}</h4>
}

export default CardTitle

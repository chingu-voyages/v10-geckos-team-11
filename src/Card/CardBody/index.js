import React from 'react'

const CardBody = ({ className, children }) => {
  return <div className={`card-body ${className}`}>{children}</div>
}

export default CardBody

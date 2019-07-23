import React from 'react'

const CardLink = ({ href, className = '', children }) => {
  return (
    <a className={`card-link ${className}`} href={href}>
      {children}
    </a>
  )
}

export default CardLink

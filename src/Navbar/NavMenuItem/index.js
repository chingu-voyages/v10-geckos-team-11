import React from 'react'

const NavMenuItem = ({ children, href, className }) => {
  return (
    <li className={className}>
      <a href={href}>{children}</a>
    </li>
  )
}

export default NavMenuItem

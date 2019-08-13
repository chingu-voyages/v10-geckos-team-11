import React from 'react'
import getClassNames from '../../utilities/getClassNames'

const NavMenuItem = ({
  children,
  href,
  className,
  color,
  bgColor,
  margin,
  padding
}) => {
  return (
    <li>
      <a
        href={href}
        className={getClassNames({
          className,
          color,
          bgColor,
          margin,
          padding
        })}
      >
        {children}
      </a>
    </li>
  )
}

export default NavMenuItem

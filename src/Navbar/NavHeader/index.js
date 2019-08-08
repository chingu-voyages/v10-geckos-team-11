import React from 'react'

const NavBrand = ({ className, children }) => {
  let navBrandClassName = 'nav-brand'
  if (className) {
    navBrandClassName += ` ${className}`
  }

  return <div className={navBrandClassName}>{children}</div>
}

export default NavBrand

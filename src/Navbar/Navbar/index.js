import React from 'react'

const Navbar = ({ className, children, fixed, split }) => {
  let navbarClassName = 'border'
  if (className) {
    navbarClassName += ` ${className}`
  }
  if (fixed) {
    navbarClassName += ` fixed`
  }
  if (split) {
    navbarClassName += ` split-nav`
  }

  return <nav className={navbarClassName}>{children}</nav>
}

export default Navbar

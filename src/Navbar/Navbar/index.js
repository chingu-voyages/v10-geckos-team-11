import React from 'react'
import getMarginClassName from '../../utilities/getMarginClassName'
import getPaddingClassName from '../../utilities/getPaddingClassName'

const Navbar = ({
  className,
  children,
  fixed,
  split,
  margin,
  padding,
  color,
  bgColor
}) => {
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
  if (color) {
    navbarClassName += ` text-${color}`
  }
  if (bgColor) {
    navbarClassName += ` background-${bgColor}`
  }

  const marginClassName = getMarginClassName(margin)
  if (marginClassName) {
    navbarClassName = `${navbarClassName} ${marginClassName}`
  }

  const paddingClassName = getPaddingClassName(padding)
  if (paddingClassName) {
    navbarClassName = `${navbarClassName} ${paddingClassName}`
  }

  return <nav className={navbarClassName}>{children}</nav>
}

export default Navbar

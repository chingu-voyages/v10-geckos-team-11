import React from 'react'
import getMarginClassName from '../../utilities/getMarginClassName'
import getPaddingClassName from '../../utilities/getPaddingClassName'

const NavBrand = ({ className, children, color, bgColor, padding, margin }) => {
  let navBrandClassName = 'nav-brand'
  if (className) {
    navBrandClassName += ` ${className}`
  }
  if (color) {
    navBrandClassName += ` text-${color}`
  }
  if (bgColor) {
    navBrandClassName += ` background-${bgColor}`
  }

  const marginClassName = getMarginClassName(margin)
  if (marginClassName) {
    navBrandClassName = `${navBrandClassName} ${marginClassName}`
  }

  const paddingClassName = getPaddingClassName(padding)
  if (paddingClassName) {
    navBrandClassName = `${navBrandClassName} ${paddingClassName}`
  }

  return <div className={navBrandClassName}>{children}</div>
}

export default NavBrand

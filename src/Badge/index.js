import React from 'react'
import getMarginClassName from '../utilities/getMarginClassName'
import getPaddingClassName from '../utilities/getPaddingClassName'

const Badge = ({ children, className, color, padding, margin }) => {
  let badgeClassName = 'badge'
  if (className) {
    badgeClassName += ` ${className}`
  }

  if (color) {
    badgeClassName += ` ${color}`
  }

  const marginClassName = getMarginClassName(margin)
  if (marginClassName) {
    badgeClassName = `${badgeClassName} ${marginClassName}`
  }

  const paddingClassName = getPaddingClassName(padding)
  if (paddingClassName) {
    badgeClassName = `${badgeClassName} ${paddingClassName}`
  }

  return <span className={badgeClassName}>{children}</span>
}

export default Badge

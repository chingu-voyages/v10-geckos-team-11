import React from 'react'
import getMarginClassName from '../utilities/getMarginClassName'
import getPaddingClassName from '../utilities/getPaddingClassName'

const Border = ({
  className,
  children,
  color,
  bgColor,
  shape,
  styles,
  shadow,
  padding,
  margin
}) => {
  let borderClassName = 'border'

  if (className) {
    borderClassName += ` ${className}`
  }
  if (color) {
    borderClassName += ` border-${color}`
  }
  if (bgColor) {
    borderClassName += ` background-${bgColor}`
  }
  if (shape) {
    borderClassName += ` border-${shape}`
  }
  if (styles && Array.isArray(styles)) {
    borderClassName += ` ${styles.map(style => `border-${style}`).join(' ')}`
  }
  if (shadow) {
    borderClassName += ` shadow shadow-${shadow}`
  }
  const marginClassName = getMarginClassName(margin)
  if (marginClassName) {
    borderClassName = `${borderClassName} ${marginClassName}`
  }
  const paddingClassName = getPaddingClassName(padding)
  if (padding) {
    borderClassName = `${borderClassName} ${paddingClassName}`
  }

  return <div className={borderClassName}>{children}</div>
}

export default Border

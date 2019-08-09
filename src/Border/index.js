import React from 'react'

const Border = ({
  className,
  children,
  color,
  bgColor,
  shape,
  styles,
  shadow
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

  return <div className={borderClassName}>{children}</div>
}

export default Border

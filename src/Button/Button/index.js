import React from 'react'
import getMarginClassName from '../../utilities/getMarginClassName'
import getPaddingClassName from '../../utilities/getPaddingClassName'

const Button = ({
  className,
  color,
  size,
  block,
  disabled,
  children,
  margin,
  padding
}) => {
  let buttonClass
  if (size) {
    buttonClass = `btn-${size}`
  }

  if (block) {
    buttonClass = buttonClass ? `${buttonClass} btn-block` : 'btn-block'
  }

  if (color) {
    buttonClass = buttonClass ? `${buttonClass} btn-${color}` : `btn-${color}`
  }

  if (className) {
    buttonClass = buttonClass ? `${buttonClass} ${className}` : className
  }

  const marginClassName = getMarginClassName(margin)
  if (marginClassName) {
    buttonClass = `${buttonClass} ${marginClassName}`
  }

  const paddingClassName = getPaddingClassName(padding)
  if (padding) {
    buttonClass = `${buttonClass} ${paddingClassName}`
  }

  return (
    <button className={buttonClass} disabled={disabled}>
      {children}
    </button>
  )
}

export default Button

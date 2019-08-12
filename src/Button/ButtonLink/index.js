import React from 'react'
import getMarginClassName from '../../utilities/getMarginClassName'
import getPaddingClassName from '../../utilities/getPaddingClassName'

const ButtonLink = ({
  className,
  block,
  color,
  size,
  href,
  children,
  margin,
  padding
}) => {
  let buttonClass = 'paper-btn'
  if (size) {
    buttonClass = `${buttonClass} btn-${size}`
  }

  if (block) {
    buttonClass = buttonClass ? `${buttonClass} btn-block` : 'btn-block'
  }

  if (color) {
    buttonClass = `${buttonClass} btn-${color}`
  }

  if (className) {
    buttonClass = `${buttonClass} ${className}`
  }

  const marginClassName = getMarginClassName(margin)
  if (marginClassName) {
    buttonClass = `${buttonClass} ${marginClassName}`
  }

  const paddingClassName = getPaddingClassName(padding)
  if (paddingClassName) {
    buttonClass = `${buttonClass} ${paddingClassName}`
  }

  return (
    <a className={buttonClass} href={href}>
      {children}
    </a>
  )
}

export default ButtonLink

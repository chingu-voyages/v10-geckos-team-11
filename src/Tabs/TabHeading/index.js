import React from 'react'
import getMarginClassName from '../../utilities/getMarginClassName'
import getPaddingClassName from '../../utilities/getPaddingClassName'

const TabHeading = ({
  index,
  children,
  checked,
  margin,
  padding,
  color,
  bgColor
}) => {
  let className = ''
  const marginClassName = getMarginClassName(margin)
  if (marginClassName) {
    className = `${className} ${marginClassName}`
  }

  const paddingClassName = getPaddingClassName(padding)
  if (paddingClassName) {
    className = `${className} ${paddingClassName}`
  }

  if (bgColor) {
    className = `${className} background-${bgColor}`
  }

  if (color) {
    className = `${className} text-${color}`
  }

  return (
    <>
      <input
        id={`tab${index}`}
        type="radio"
        name="tabs"
        defaultChecked={checked}
      />
      <label htmlFor={`tab${index}`} className={className}>
        {children}
      </label>
    </>
  )
}

export default TabHeading

import React from 'react'
import getMarginClassName from '../../utilities/getMarginClassName'
import getPaddingClassName from '../../utilities/getPaddingClassName'

const TabContent = ({ index, children, margin, padding, color, bgColor }) => {
  let className = 'content'
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
    <div className={className} id={`content${index}`}>
      {children}
    </div>
  )
}

export default TabContent

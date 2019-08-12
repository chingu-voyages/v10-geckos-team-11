import React from 'react'
import getMarginClassName from '../utilities/getMarginClassName'
import getPaddingClassName from '../utilities/getPaddingClassName'

const Table = ({
  className,
  children,
  hover,
  alternating,
  color,
  bgColor,
  margin,
  padding
}) => {
  const classesArr = []
  if (hover) {
    classesArr.push('table-hover')
  }
  if (alternating) {
    classesArr.push('table-alternating')
  }
  if (className) {
    classesArr.push(className)
  }
  if (color) {
    classesArr.push(`text-${color}`)
  }
  if (bgColor) {
    classesArr.push(`background-${bgColor}`)
  }

  const marginClassName = getMarginClassName(margin)
  if (marginClassName) {
    classesArr.push(marginClassName)
  }

  const paddingClassName = getPaddingClassName(padding)
  if (paddingClassName) {
    classesArr.push(paddingClassName)
  }

  return <table className={classesArr.join(' ')}>{children}</table>
}

export default Table

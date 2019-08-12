import getMarginClassName from '../getMarginClassName'
import getPaddingClassName from '../getPaddingClassName'

const getClassNames = ({
  className,
  margin,
  padding,
  color,
  bgColor,
  inline
}) => {
  const classNamesArray = []

  if (className) {
    classNamesArray.push(className)
  }
  if (color) {
    classNamesArray.push(`text-${color}`)
  }
  if (bgColor) {
    classNamesArray.push(`background-${bgColor}`)
  }

  const marginClassName = getMarginClassName(margin)
  if (marginClassName) {
    classNamesArray.push(marginClassName)
  }

  const paddingClassName = getPaddingClassName(padding)
  if (paddingClassName) {
    classNamesArray.push(paddingClassName)
  }

  if (inline) {
    classNamesArray.push('inline')
  }

  return classNamesArray.join(' ')
}

export default getClassNames

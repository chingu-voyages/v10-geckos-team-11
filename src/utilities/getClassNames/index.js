import getMarginClassName from '../getMarginClassName'
import getPaddingClassName from '../getPaddingClassName'

const getClassNames = ({
  className,
  margin,
  padding,
  color,
  bgColor,
  inline,
  card,
  cardBody,
  cardFooter,
  cardHeader,
  cardLink,
  cardSubtitle,
  cardText,
  cardTitle,
  collapsibleBody
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

  if (card) {
    classNamesArray.push('card')
  }

  if (cardBody) {
    classNamesArray.push('card-body')
  }

  if (cardFooter) {
    classNamesArray.push('card-footer')
  }

  if (cardHeader) {
    classNamesArray.push('card-header')
  }

  if (cardLink) {
    classNamesArray.push('card-link')
  }

  if (cardSubtitle) {
    classNamesArray.push('card-subtitle')
  }

  if (cardText) {
    classNamesArray.push('card-text')
  }

  if (cardTitle) {
    classNamesArray.push('card-title')
  }

  if (collapsibleBody) {
    classNamesArray.push('collapsible-body')
  }

  return classNamesArray.join(' ')
}

export default getClassNames

import React from 'react'
import getMarginClassName from '../../utilities/getMarginClassName'
import getPaddingClassName from '../../utilities/getPaddingClassName'

const Tabs = ({ children, color, bgColor, margin, padding }) => {
  const childrenElements = React.Children.toArray(children)

  // Rearrange tab elements from ordering from:

  // TabHeading 1
  // TabContent 1
  // TabHeading 2
  // TabHeading 2

  // to:

  // TabHeading 1
  // TabHeading 2
  // TabContent 1
  // TabContent 2

  // PaperCSS requires the HTML tags to be ordered
  // the second way. However I think the first way
  // makes more sense therefoere the elements are rearranged.

  const tabHeadings = childrenElements.filter((_, i) => i % 2 === 0)

  const tabContents = childrenElements.filter((_, i) => i % 2 === 1)

  const arrangedTabElements = [...tabHeadings, ...tabContents]

  let className = 'row flex-spaces tabs'

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

  return <div className={className}>{arrangedTabElements}</div>
}

export default Tabs

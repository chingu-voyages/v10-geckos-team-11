import React from 'react'
import getMarginClassName from '../../utilities/getMarginClassName'
import getPaddingClassName from '../../utilities/getPaddingClassName'

const Article = ({ className, children, margin, padding, color, bgColor }) => {
  let articleClassName = 'article'
  if (className) {
    articleClassName = `${articleClassName} ${className}`
  }
  if (color) {
    articleClassName = `${articleClassName} text-${color}`
  }
  if (bgColor) {
    articleClassName = `${articleClassName} background-${bgColor}`
  }
  const marginClassName = getMarginClassName(margin)
  if (marginClassName) {
    articleClassName = `${articleClassName} ${marginClassName}`
  }
  const paddingClassName = getPaddingClassName(padding)
  if (paddingClassName) {
    articleClassName = `${articleClassName} ${paddingClassName}`
  }

  return <article className={articleClassName}>{children}</article>
}

export default Article

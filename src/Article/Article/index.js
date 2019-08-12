import React from 'react'
import getMarginClassName from '../../utilities/getMarginClassName'
import getPaddingClassName from '../../utilities/getPaddingClassName'

const Article = ({ className, children, margin, padding, color, bgColor }) => {
  let articleClassName = 'article'
  if (className) {
    articleClassName = `${articleClassName} ${className}`
  }
  const marginClassName = getMarginClassName(margin)
  if (marginClassName) {
    articleClassName = `${articleClassName} ${marginClassName}`
  }
  const paddingClassName = getPaddingClassName(padding)
  if (padding) {
    articleClassName = `${articleClassName} ${paddingClassName}`
  }

  return <article className={articleClassName}>{children}</article>
}

export default Article

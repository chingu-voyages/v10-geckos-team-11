import React from 'react'
import getMarginClassName from '../../utilities/getMarginClassName'
import getPaddingClassName from '../../utilities/getPaddingClassName'

const ArticleTitle = ({
  className,
  children,
  margin,
  padding,
  color,
  bgColor
}) => {
  let articleTitleClassName = 'article-title'
  if (className) {
    articleTitleClassName = `${articleTitleClassName} ${className}`
  }
  if (color) {
    articleTitleClassName = `${articleTitleClassName} text-${color}`
  }
  if (bgColor) {
    articleTitleClassName = `${articleTitleClassName} background-${bgColor}`
  }
  const marginClassName = getMarginClassName(margin)
  if (marginClassName) {
    articleTitleClassName = `${articleTitleClassName} ${marginClassName}`
  }
  const paddingClassName = getPaddingClassName(padding)
  if (padding) {
    articleTitleClassName = `${articleTitleClassName} ${paddingClassName}`
  }

  return <h1 className={articleTitleClassName}>{children}</h1>
}

export default ArticleTitle

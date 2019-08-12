import React from 'react'
import getMarginClassName from '../../utilities/getMarginClassName'
import getPaddingClassName from '../../utilities/getPaddingClassName'

const ArticleMeta = ({
  className,
  children,
  padding,
  margin,
  color,
  bgColor
}) => {
  let articleMetaClassName = 'article-meta'
  if (className) {
    articleMetaClassName = `${articleMetaClassName} ${className}`
  }
  if (color) {
    articleMetaClassName = `${articleMetaClassName} text-${color}`
  }
  if (bgColor) {
    articleMetaClassName = `${articleMetaClassName} background-${bgColor}`
  }
  const marginClassName = getMarginClassName(margin)
  if (marginClassName) {
    articleMetaClassName = `${articleMetaClassName} ${marginClassName}`
  }
  const paddingClassName = getPaddingClassName(padding)
  if (paddingClassName) {
    articleMetaClassName = `${articleMetaClassName} ${paddingClassName}`
  }

  return <p className={articleMetaClassName}>{children}</p>
}

export default ArticleMeta

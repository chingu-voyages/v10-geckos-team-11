import React from 'react'

const ArticleTitle = ({ className, children }) => {
  const articleTitleClass = className
    ? `article-title ${className}`
    : 'article-title'

  return <h1 className={articleTitleClass}>{children}</h1>
}

export default ArticleTitle

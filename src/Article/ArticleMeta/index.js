import React from 'react'

const ArticleMeta = ({ className, children }) => {
  const articleMetaClass = className
    ? `article-meta ${className}`
    : 'article-meta'

  return <p className={articleMetaClass}>{children}</p>
}

export default ArticleMeta

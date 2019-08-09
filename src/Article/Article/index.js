import React from 'react'

const Article = ({ className, children }) => {
  const articleClass = className ? `article ${className}` : 'article'

  return <article className={articleClass}>{children}</article>
}

export default Article

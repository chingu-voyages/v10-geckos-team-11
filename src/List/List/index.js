import React from 'react'

const List = ({ type = 'unordered', inline, children }) => {
  const inlineClass = inline ? 'inline' : ''

  if (type === 'unordered') {
    return <ul className={inlineClass}>{children}</ul>
  } else if (type === 'ordered') {
    return <ol className={inlineClass}>{children}</ol>
  }
}

export default List

import React from 'react'
import getClassNames from '../../utilities/getClassNames'

const List = ({
  type = 'unordered',
  inline,
  children,
  color,
  bgColor,
  margin,
  padding
}) => {
  const className = getClassNames({ inline, color, bgColor, margin, padding })

  if (type === 'unordered') {
    return <ul className={className}>{children}</ul>
  } else if (type === 'ordered') {
    return <ol className={className}>{children}</ol>
  }
}

export default List

import React from 'react'

const Table = ({ className, children, hover, alternating }) => {
  const classesArr = []
  if (hover) {
    classesArr.push('table-hover')
  }
  if (alternating) {
    classesArr.push('table-alternating')
  }
  if (className) {
    classesArr.push(className)
  }

  return <table className={classesArr.join(' ')}>{children}</table>
}

export default Table

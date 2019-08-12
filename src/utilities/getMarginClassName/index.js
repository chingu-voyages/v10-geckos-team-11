const getMarginClassName = margin => {
  if (margin && typeof margin === 'object') {
    const marginClassNames = []
    if (margin.all) {
      if (margin.all === 'medium') {
        marginClassNames.push('margin')
      } else {
        marginClassNames.push(`margin-${margin.all}`)
      }
    }
    if (margin.left) {
      if (margin.left === 'medium') {
        marginClassNames.push('margin-left')
      } else {
        marginClassNames.push(`margin-left-${margin.left}`)
      }
    }
    if (margin.right) {
      if (margin.right === 'medium') {
        marginClassNames.push('margin-right')
      } else {
        marginClassNames.push(`margin-right-${margin.right}`)
      }
    }
    if (margin.top) {
      if (margin.top === 'medium') {
        marginClassNames.push('margin-top')
      } else {
        marginClassNames.push(`margin-top-${margin.top}`)
      }
    }
    if (margin.bottom) {
      if (margin.bottom === 'medium') {
        marginClassNames.push('margin-bottom')
      } else {
        marginClassNames.push(`margin-bottom-${margin.bottom}`)
      }
    }

    return marginClassNames.join(' ')
  }
  return null
}

export default getMarginClassName

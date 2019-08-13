const getPaddingClassName = padding => {
  if (padding && typeof padding === 'object') {
    const paddingClassNames = []
    if (padding.all) {
      if (padding.all === 'medium') {
        paddingClassNames.push('padding')
      } else {
        paddingClassNames.push(`padding-${padding.all}`)
      }
    }
    if (padding.left) {
      if (padding.left === 'medium') {
        paddingClassNames.push('padding-left')
      } else {
        paddingClassNames.push(`padding-left-${padding.left}`)
      }
    }
    if (padding.right) {
      if (padding.right === 'medium') {
        paddingClassNames.push('padding-right')
      } else {
        paddingClassNames.push(`padding-right-${padding.right}`)
      }
    }
    if (padding.top) {
      if (padding.top === 'medium') {
        paddingClassNames.push('padding-top')
      } else {
        paddingClassNames.push(`padding-top-${padding.top}`)
      }
    }
    if (padding.bottom) {
      if (padding.bottom === 'medium') {
        paddingClassNames.push('padding-bottom')
      } else {
        paddingClassNames.push(`padding-bottom-${padding.bottom}`)
      }
    }

    return paddingClassNames.join(' ')
  }
  return null
}

export default getPaddingClassName

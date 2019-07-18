import React from 'react'

const Image = ({ float, noResponsive, noBorder, src }) => {
  const imageClass = []

  if (float === 'left' || float === 'right') {
    imageClass.push(`float-${float}`)
  }

  if (noResponsive) {
    imageClass.push('no-responsive')
  }

  if (noBorder) {
    imageClass.push('no-border')
  }

  const className = imageClass.length > 0 ? imageClass.join(' ') : undefined

  return <img className={className} src={src} />
}

export default Image

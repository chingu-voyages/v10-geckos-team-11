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

  return <img className={imageClass.join(' ')} src={src} />
}

export default Image

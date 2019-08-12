import React from 'react'
import getMarginClassName from '../utilities/getMarginClassName'
import getPaddingClassName from '../utilities/getPaddingClassName'

const Image = ({ float, noResponsive, noBorder, src, margin, padding }) => {
  const imageClass = []
  let className = ''
  if (imageClass.length > 0) {
    className = imageClass.join(' ')
  }

  if (float === 'left' || float === 'right') {
    imageClass.push(`float-${float}`)
  }

  if (noResponsive) {
    imageClass.push('no-responsive')
  }

  if (noBorder) {
    imageClass.push('no-border')
  }

  const marginClassName = getMarginClassName(margin)
  if (marginClassName) {
    className = `${className} ${marginClassName}`
  }

  const paddingClassName = getPaddingClassName(padding)
  if (padding) {
    className = `${className} ${paddingClassName}`
  }

  return <img className={className} src={src} />
}

export default Image

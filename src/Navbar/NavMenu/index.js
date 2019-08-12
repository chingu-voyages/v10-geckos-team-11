import React from 'react'
import Collapsible from '../../Collapsible/Collapsible/Collapsible'
import getMarginClassName from '../../utilities/getMarginClassName'
import getPaddingClassName from '../../utilities/getPaddingClassName'

const NavMenu = ({ children, className, color, bgColor, margin, padding }) => {
  const id = `collapsible${Date.now()}${Math.random()}`
  const classesArray = []

  if (className) {
    classesArray.push(className)
  }
  if (color) {
    classesArray.push(`text-${color}`)
  }
  if (bgColor) {
    classesArray.push(`background-${bgColor}`)
  }

  const marginClassName = getMarginClassName(margin)
  if (marginClassName) {
    classesArray.push(marginClassName)
  }

  const paddingClassName = getPaddingClassName(padding)
  if (paddingClassName) {
    classesArray.push(paddingClassName)
  }

  return (
    <Collapsible className={classesArray.join(' ')}>
      <input id={id} type="checkbox" name={id} />
      <button>
        <label htmlFor={id} className={className}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </label>
      </button>
      <div className="collapsible-body">
        <ul className="inline">{children}</ul>
      </div>
    </Collapsible>
  )
}

export default NavMenu

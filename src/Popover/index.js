import React from 'react'
import getClassNames from '../utilities/getClassNames'

const Popover = ({ position, renderAs, children, className, popoverMsg }) => {
  const $component = renderAs
  const props = {
    className: getClassNames({ className })
  }
  if (position) {
    props[`popover-${position}`] = popoverMsg
  }

  return <$component {...props}>{children}</$component>
}

export default Popover

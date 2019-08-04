import React from 'react'

const Popover = ({ position, renderAs, children, className, popoverMsg }) => {
  const $component = renderAs
  const props = {
    className
  }
  if (position) {
    props[`popover-${position}`] = popoverMsg
  }

  return <$component {...props}>{children}</$component>
}

export default Popover

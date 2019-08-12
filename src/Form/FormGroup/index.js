import React from 'react'

const FormGroup = ({ renderAs, children, className }) => {
  const $component = renderAs || 'div'

  let componentClass = 'form-group'

  if (className) {
    componentClass += ` ${className}`
  }

  return <$component className={componentClass}>{children}</$component>
}

export default FormGroup

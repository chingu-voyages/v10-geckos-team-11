import React from 'react'

const Input = ({
  type,
  placeholder,
  id,
  block,
  className,
  disabled,
  name,
  value,
  onChange,
  checked
}) => {
  let componentClass = className || ''

  if (block) {
    componentClass += ` input-block`
  }

  return (
    <input
      className={componentClass}
      type={type || 'text'}
      placeholder={placeholder || ''}
      id={id || ''}
      disabled={disabled || false}
      name={name}
      value={value}
      onChange={onChange}
      checked={checked}
    />
  )
}

export default Input

import React from 'react'

const ModalLink = ({ modalId, children, className }) => (
  <label
    className={`modal-link${className ? ` ${className}` : ''}`}
    htmlFor={modalId}
  >
    {children}
  </label>
)

export default ModalLink

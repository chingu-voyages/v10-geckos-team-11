import React from 'react'

const ModalText = ({ children, className }) => (
  <p className={`modal-text${className ? ` ${className}` : ''}`}>{children}</p>
)

export default ModalText

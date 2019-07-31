import React from 'react'

const ModalTitle = ({ children, className }) => (
  <h4 className={`modal-title${className ? ` ${className}` : ''}`}>
    {children}
  </h4>
)

export default ModalTitle

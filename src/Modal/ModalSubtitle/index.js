import React from 'react'

const ModalSubtitle = ({ children, className }) => (
  <h5 className={`modal-subtitle${className ? ` ${className}` : ''}`}>
    {children}
  </h5>
)

export default ModalSubtitle

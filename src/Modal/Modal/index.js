import React from 'react'

const Modal = ({ className, modalId, children }) => {
  // Pass id as props `modalId` to children
  const childrenWithProps = React.Children.map(children, child =>
    React.cloneElement(child, { modalId })
  )

  return (
    <>
      <input id={modalId} type="checkbox" className="modal-state" />
      <div className={`modal${className ? ` ${className}` : ''}`}>
        {childrenWithProps}
      </div>
    </>
  )
}

export default Modal

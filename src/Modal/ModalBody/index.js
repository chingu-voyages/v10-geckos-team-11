import React from 'react'

const ModalBody = ({ children, modalId }) => {
  // Pass id as props `modalId` to children
  const childrenWithProps = React.Children.map(children, child =>
    React.cloneElement(child, { modalId })
  )

  return <div className="modal-body">{childrenWithProps}</div>
}

export default ModalBody

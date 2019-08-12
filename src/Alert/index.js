import React from 'react'
import getMarginClassName from '../utilities/getMarginClassName'
import getPaddingClassName from '../utilities/getPaddingClassName'

const Alert = ({ color, dismissable, id, children, margin, padding }) => {
  let alertClassName = 'alert'
  if (color) {
    alertClassName = `${alertClassName} alert-${color}`
  }
  if (dismissable) {
    alertClassName = `${alertClassName} dismissible`
  }
  const marginClassName = getMarginClassName(margin)
  if (marginClassName) {
    alertClassName = `${alertClassName} ${marginClassName}`
  }
  const paddingClassName = getPaddingClassName(padding)
  if (padding) {
    alertClassName = `${alertClassName} ${paddingClassName}`
  }

  return (
    <>
      {dismissable && (
        <>
          <input className="alert-state" id={id} type="checkbox" />
          <div className={alertClassName}>
            {children}
            <label className="btn-close" htmlFor={id}>
              X
            </label>
          </div>{' '}
        </>
      )}
      {!dismissable && <div className={alertClassName}>{children}</div>}
    </>
  )
}

export default Alert

import React from 'react'

const Alert = ({ color, dismissable, id }) =>
  dismissable ? (
    <>
      <input className="alert-state" id={id} type="checkbox" />
      <div className={`alert alert-${color} dismissible`}>
        Alert-primary
        <label className="btn-close" htmlFor={id}>
          X
        </label>
      </div>{' '}
    </>
  ) : (
    <div className={`alert alert-${color}`}>Alert-primary</div>
  )

export default Alert

import React from 'react'

const TabHeading = ({ index, children, checked }) => {
  return (
    <>
      <input
        id={`tab${index}`}
        type="radio"
        name="tabs"
        defaultChecked={checked}
      />
      <label htmlFor={`tab${index}`}>{children}</label>
    </>
  )
}

export default TabHeading

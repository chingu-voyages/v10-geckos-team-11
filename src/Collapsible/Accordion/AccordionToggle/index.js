import React from 'react'

const AccordionToggle = ({ className, children }) => {
  // Paper CSS library requires the id attribute for the collapsible toggle
  // The format of the value for id is "collapsible" followed by a number
  // To avoid any possibility of duplicate id between multiple toggles, timestamp followed by a random number is used as the number in id
  const id = `collapsible${Date.now()}${Math.random()}`
  return (
    <>
      <input id={id} type="radio" name="collapsible" />
      <label htmlFor={id} className={className}>
        {children}
      </label>
    </>
  )
}

export default AccordionToggle

import React from 'react'
import Collapsible from '../../Collapsible/Collapsible/Collapsible'

const NavMenu = ({ children, className }) => {
  const id = `collapsible${Date.now()}${Math.random()}`

  return (
    <Collapsible className={className}>
      <input id={id} type="checkbox" name={id} />
      <button>
        <label htmlFor={id} className={className}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </label>
      </button>
      <div className="collapsible-body">
        <ul className="inline">{children}</ul>
      </div>
    </Collapsible>
  )
}

export default NavMenu

import React from 'react'
import getClassNames from '../../utilities/getClassNames'

const ListItem = ({ children, color, bgColor, margin, padding }) => (
  <li className={getClassNames({ color, bgColor, margin, padding })}>
    {children}
  </li>
)

export default ListItem

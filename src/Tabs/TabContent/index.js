import React from 'react'

const TabContent = ({ index, children }) => (
  <div className="content" id={`content${index}`}>
    {children}
  </div>
)

export default TabContent

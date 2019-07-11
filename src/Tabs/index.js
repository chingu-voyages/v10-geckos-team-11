import React from 'react'

const Tabs = ({ children }) => {
  const childrenElements = React.Children.toArray(children)

  // Rearrange tab elements from ordering from:

  // TabHeading 1
  // TabContent 1
  // TabHeading 2
  // TabHeading 2

  // to:

  // TabHeading 1
  // TabHeading 2
  // TabContent 1
  // TabContent 2

  // PaperCSS requires the HTML tags to be ordered
  // the second way. However I think the first way
  // makes more sense therefoere the elements are rearranged.

  const tabHeadings = childrenElements.filter((_, i) => i % 2 === 0)

  const tabContents = childrenElements.filter((_, i) => i % 2 === 1)

  const arrangedTabElements = [...tabHeadings, ...tabContents]

  return <div className="row flex-spaces tabs">{arrangedTabElements}</div>
}

export default Tabs

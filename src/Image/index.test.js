import React from 'react'
import renderer from 'react-test-renderer'

import Image from '.'

describe('Image', () => {
  it('renders default image with border', () => {
    const img = renderer.create(<Image />).toJSON()

    expect(img).toMatchSnapshot()
  })

  it('`noResponsive` prop renders img tag with `no-responsive` class', () => {
    const imgNotResponsive = renderer.create(<Image noResponsive />).toJSON()

    expect(imgNotResponsive.props.className).toBe('no-responsive')
  })

  it('`noBorder` prop renders img tag with `no-border` class', () => {
    const imgNoBorder = renderer.create(<Image noBorder />).toJSON()

    expect(imgNoBorder.props.className).toBe('no-border')
  })

  it('`float` prop set to "left" or "right" sets the float className', () => {
    const imgFloatedRight = renderer.create(<Image float="right" />).toJSON()
    const imgFloatedLeft = renderer.create(<Image float="left" />).toJSON()

    expect(imgFloatedRight.props.className).toBe('float-right')
    expect(imgFloatedLeft.props.className).toBe('float-left')
  })
})

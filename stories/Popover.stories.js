import React from 'react'
import { storiesOf } from '@storybook/react'

import Popover from '../src/Popover'

storiesOf('Popover', module)
  .add('left', () => {
    return (
      <Popover renderAs="span" position="left" popoverMsg="Popover on left">
        Popover left position
      </Popover>
    )
  })
  .add('top', () => {
    return (
      <Popover renderAs="span" position="top" popoverMsg="Popover on top">
        Popover top position
      </Popover>
    )
  })
  .add('bottom', () => {
    return (
      <Popover renderAs="span" position="bottom" popoverMsg="Popover on bottom">
        Popover bottom position
      </Popover>
    )
  })
  .add('right', () => {
    return (
      <Popover renderAs="span" position="right" popoverMsg="Popover on right">
        Popover right position
      </Popover>
    )
  })
  .add('button right', () => {
    return (
      <Popover renderAs="button" position="right" popoverMsg="Popover on right">
        Popover right position
      </Popover>
    )
  })

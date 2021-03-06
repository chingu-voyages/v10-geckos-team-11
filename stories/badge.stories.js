import React from 'react'
import { storiesOf } from '@storybook/react'

import Badge from '../src/Badge'

storiesOf('Badges', module).add('Badges', () => {
  return (
    <>
      <h1>
        Example h1 heading <Badge>123</Badge>
      </h1>
      <h2>
        Example h2 heading <Badge color="secondary">123</Badge>
      </h2>
      <h3>
        Example h3 heading <Badge color="success">123</Badge>
      </h3>
      <h4>
        Example h4 heading <Badge color="warning">123</Badge>
      </h4>
      <h5>
        Example h5 heading <Badge color="danger">123</Badge>
      </h5>
      <h6>
        Example h6 heading <Badge>123</Badge>
      </h6>
    </>
  )
})

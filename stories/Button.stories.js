import React from 'react'
import { storiesOf } from '@storybook/react'

import Button from '../src/Button/Button'
import ButtonLink from '../src/Button/ButtonLink'

storiesOf('Button', module)
  .add('Colors', () => {
    return (
      <>
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button color="success">Success</Button>
        <Button color="warning">Warning</Button>
        <Button color="danger">Danger</Button>
      </>
    )
  })
  .add('Size', () => {
    return (
      <>
        <Button size="large">Large</Button>
        <Button>Default</Button>
        <Button size="small">Small</Button>
        <div className="col-6 col">
          <Button size="block">Block level</Button>
        </div>
      </>
    )
  })
  .add('Link', () => {
    return (
      <>
        <ButtonLink href="https://www.google.com">
          Take me to Google!
        </ButtonLink>
      </>
    )
  })
  .add('Disabled button', () => {
    return (
      <>
        <Button disabled>Disabled</Button>
      </>
    )
  })

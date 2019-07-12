import React from 'react'
import { storiesOf } from '@storybook/react'

import Card from '../src/Card/Card'
import CardBody from '../src/Card/CardBody'
import CardTitle from '../src/Card/CardTitle'
import CardSubtitle from '../src/Card/CardSubtitle'
import CardText from '../src/Card/CardText'
import CardLink from '../src/Card/CardLink'
import CardHeader from '../src/Card/CardHeader'
import CardFooter from '../src/Card/CardFooter'
import CardImage from '../src/Card/CardImage'
import './stylesheet.css'

storiesOf('Cards', module).add('Card', () => {
  return (
    <Card className="card-small">
      <CardHeader className="text-small">Header</CardHeader>
      <CardBody className="margin-small">
        <CardTitle className="color-brown text-large">
          Awesome Paper CSS Card!
        </CardTitle>
        <CardSubtitle className="text-medium">Paper CSS</CardSubtitle>
        <CardText className="color-black">
          There are default styles for each components but class names can be
          passed to customize styles.
        </CardText>
        <CardLink href="" className="text-medium">
          First Link
        </CardLink>
        <CardLink href="">Second Link</CardLink>
        <button>
          <CardLink href="" className="no-underline">
            Let me go here!
          </CardLink>
        </button>
      </CardBody>
      <CardFooter className="text-small">Footer</CardFooter>
      <CardImage
        src="https://unsplash.it/550/350"
        alt="Card example image"
        className="vertical-stretch"
      />
    </Card>
  )
})

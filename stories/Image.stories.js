import React from 'react'
import { storiesOf } from '@storybook/react'

import Image from '../src/Image'

storiesOf('Image', module)
  .add('default', () => <Image src="https://placeimg.com/640/480/nature" />)
  .add('not responsive', () => (
    <Image src="https://placeimg.com/640/480/nature" noResponsive />
  ))
  .add('no border', () => (
    <Image src="https://placeimg.com/640/480/nature" noBorder />
  ))

storiesOf('Image/float', module)
  .add('right', () => (
    <p>
      <Image float="right" src="https://placeimg.com/240/240/nature" />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id sagittis
      ligula, at mattis diam. Aliquam efficitur mi fringilla dui laoreet, vel
      bibendum libero faucibus. Etiam at neque risus. Ut rhoncus ultricies
      mauris in elementum. Mauris sit amet dolor risus. Class aptent taciti
      sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
      Fusce sit amet lobortis diam, eu efficitur justo. Cras in metus velit. Nam
      lobortis felis sit amet viverra viverra. Nam at porta magna, a laoreet
      odio. Nunc vulputate metus quis iaculis euismod. Maecenas eu erat at quam
      mollis finibus. Integer hendrerit nisl in est hendrerit, a rutrum nibh
      auctor. Aenean vel dui ornare, efficitur orci sed, congue lacus. Nunc non
      mi eget risus feugiat viverra nec in leo. Etiam sit amet tortor nec dui
      tempus luctus nec eget massa.
    </p>
  ))
  .add('left', () => (
    <p>
      <Image float="left" src="https://placeimg.com/240/240/nature" />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id sagittis
      ligula, at mattis diam. Aliquam efficitur mi fringilla dui laoreet, vel
      bibendum libero faucibus. Etiam at neque risus. Ut rhoncus ultricies
      mauris in elementum. Mauris sit amet dolor risus. Class aptent taciti
      sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
      Fusce sit amet lobortis diam, eu efficitur justo. Cras in metus velit. Nam
      lobortis felis sit amet viverra viverra. Nam at porta magna, a laoreet
      odio. Nunc vulputate metus quis iaculis euismod. Maecenas eu erat at quam
      mollis finibus. Integer hendrerit nisl in est hendrerit, a rutrum nibh
      auctor. Aenean vel dui ornare, efficitur orci sed, congue lacus. Nunc non
      mi eget risus feugiat viverra nec in leo. Etiam sit amet tortor nec dui
      tempus luctus nec eget massa.
    </p>
  ))

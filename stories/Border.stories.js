import React from 'react'
import { storiesOf } from '@storybook/react'

import Border from '../src/Border/'

storiesOf('Border', module)
  .add('colors', () => {
    return (
      <>
        <div className="row">
          <Border className="sm-2 col">Border primary</Border>
          <Border className="sm-2 col" color="secondary">
            Border secondary
          </Border>
          <Border className="sm-2 col" color="success">
            Border success
          </Border>
          <Border className="sm-2 col" color="warning">
            Border warning
          </Border>
          <Border className="sm-2 col" color="danger">
            Border danger
          </Border>
          <Border className="sm-2 col" bgColor="primary">
            Border white
          </Border>
        </div>
      </>
    )
  })
  .add('shapes', () => {
    return (
      <>
        <div className="row flex-spaces">
          <Border className="sm-3 col">Border 1</Border>
          <Border className="sm-3 col" shape="2">
            Border 2
          </Border>
          <Border className="sm-3 col" shape="3">
            Border 3
          </Border>
        </div>
        <div className="row flex-spaces">
          <Border className="sm-3 col" shape="4">
            Border 4
          </Border>
          <Border className="sm-3 col" shape="5">
            Border 5
          </Border>
          <Border className="sm-3 col" shape="6">
            Border 6
          </Border>
        </div>
      </>
    )
  })
  .add('shadows', () => {
    return (
      <div className="row flex-spaces">
        <Border className="sm-3 col" shadow="large">
          Large
        </Border>
        <Border className="sm-3 col" shadow>
          Default
        </Border>
        <Border className="sm-3 col" shadow="small">
          Small
        </Border>
        <Border className="sm-3 col" shadow="hover">
          Hover
        </Border>
      </div>
    )
  })
  .add('styles', () => {
    return (
      <>
        <div className="row flex-spaces">
          <Border className="sm-3 col" styles={['dashed']}>
            Dashed
          </Border>
          <Border className="sm-3 col" styles={['dotted']}>
            Dotted
          </Border>
          <Border className="sm-3 col" styles={['thick', 'dashed']}>
            Dashed Thick
          </Border>
          <Border className="sm-3 col" styles={['thick', 'dotted']}>
            Dotted Thick
          </Border>
        </div>
      </>
    )
  })

import React from 'react'
import { storiesOf } from '@storybook/react'

import Tabs from '../src/Tabs'
import TabHeading from '../src/TabHeading'
import TabContent from '../src/TabContent'

storiesOf('Tabs', module).add('two tabs', () => (
  <Tabs>
    <TabHeading index={1} checked={true}>
      Tab 1
    </TabHeading>
    <TabContent index={1}>
      <h4>Tab 1 Contents</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Vestibulum lectus
        mauris ultrices eros. Non diam phasellus vestibulum lorem sed risus
        ultricies tristique. Odio ut enim blandit volutpat maecenas volutpat.
        Egestas quis ipsum suspendisse ultrices gravida dictum. Elementum nibh
        tellus molestie nunc non blandit. Tempor id eu nisl nunc mi ipsum. Dis
        parturient montes nascetur ridiculus mus. Eu facilisis sed odio morbi
        quis commodo odio. Facilisis mauris sit amet massa vitae. Elit sed
        vulputate mi sit amet mauris.
      </p>
    </TabContent>
    <TabHeading index={2}>Tab 2</TabHeading>
    <TabContent index={2}>
      <h4>Tab 2 Contents</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Lorem donec massa
        sapien faucibus et molestie. Pretium lectus quam id leo in vitae turpis
        massa. Dis parturient montes nascetur ridiculus mus mauris vitae. Tellus
        pellentesque eu tincidunt tortor aliquam nulla facilisi cras.
        Sollicitudin aliquam ultrices sagittis orci. Varius vel pharetra vel
        turpis nunc eget lorem dolor. Integer vitae justo eget magna fermentum.{' '}
      </p>
    </TabContent>
  </Tabs>
))

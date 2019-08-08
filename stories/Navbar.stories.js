import React from 'react'
import { storiesOf } from '@storybook/react'

import Navbar from '../src/Navbar/Navbar'
import NavHeader from '../src/Navbar/NavHeader'
import NavMenu from '../src/Navbar/NavMenu'
import NavMenuItem from '../src/Navbar/NavMenuItem'
import './stylesheet.css'

storiesOf('Navbar', module)
  .add('Split navbar', () => {
    return (
      <Navbar fixed split>
        <NavHeader>
          <h3>
            <a href="#">Paper CSS</a>
          </h3>
        </NavHeader>
        <NavMenu>
          <NavMenuItem href="#">Documentation</NavMenuItem>
          <NavMenuItem href="#">About</NavMenuItem>
          <NavMenuItem href="#">Github</NavMenuItem>
        </NavMenu>
      </Navbar>
    )
  })
  .add('Not split navbar', () => {
    return (
      <Navbar fixed>
        <NavHeader>
          <h3>
            <a href="#">Paper CSS</a>
          </h3>
        </NavHeader>
        <NavMenu>
          <NavMenuItem href="#">Documentation</NavMenuItem>
          <NavMenuItem href="#">About</NavMenuItem>
          <NavMenuItem href="#">Github</NavMenuItem>
        </NavMenu>
      </Navbar>
    )
  })
  .add('Not fixed bavbar', () => {
    return (
      <>
        <Navbar split>
          <NavHeader>
            <h3>
              <a href="#">Paper CSS</a>
            </h3>
          </NavHeader>
          <NavMenu>
            <NavMenuItem href="#">Documentation</NavMenuItem>
            <NavMenuItem href="#">About</NavMenuItem>
            <NavMenuItem href="#">Github</NavMenuItem>
          </NavMenu>
        </Navbar>
        <div style={{ height: '2000px' }}></div>
      </>
    )
  })

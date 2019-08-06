import React from 'react'
import { storiesOf } from '@storybook/react'

import Table from '../src/Table'

storiesOf('Table', module)
  .add('default', () => (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Position</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Bob Dylan</td>
          <td>Musician</td>
          <td>California, USA</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Eric Clapton</td>
          <td>Musician</td>
          <td>Ohio, USA</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Daniel Kahneman</td>
          <td>Psychologist</td>
          <td>California, USA</td>
        </tr>
      </tbody>
    </table>
  ))
  .add('hover', () => (
    <Table hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Position</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Bob Dylan</td>
          <td>Musician</td>
          <td>California, USA</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Eric Clapton</td>
          <td>Musician</td>
          <td>Ohio, USA</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Daniel Kahneman</td>
          <td>Psychologist</td>
          <td>California, USA</td>
        </tr>
      </tbody>
    </Table>
  ))
  .add('alternating', () => (
    <Table alternating>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Position</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Bob Dylan</td>
          <td>Musician</td>
          <td>California, USA</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Eric Clapton</td>
          <td>Musician</td>
          <td>Ohio, USA</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Daniel Kahneman</td>
          <td>Psychologist</td>
          <td>California, USA</td>
        </tr>
      </tbody>
    </Table>
  ))

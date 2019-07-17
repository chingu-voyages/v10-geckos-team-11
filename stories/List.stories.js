import React from 'react'
import { storiesOf } from '@storybook/react'

import List from '../src/List/List'
import ListItem from '../src/List/ListItem'

storiesOf('List', module)
  .add('Nested Unordered List', () => (
    <List type="unordered">
      <ListItem>Let&apos;s try this</ListItem>
      <ListItem>Let&apos;s try this again</ListItem>
      <List type="unordered">
        <ListItem>And now we are nested</ListItem>
        <ListItem>Pretty cool?</ListItem>
        <List type="unordered">
          <ListItem>The list items are just text</ListItem>
          <ListItem>From this font</ListItem>
          <List type="unordered">
            <ListItem>We&apos;ll keep going</ListItem>
            <ListItem>Until we hit</ListItem>
            <List type="unordered">
              <ListItem>LEVEL 5</ListItem>
            </List>
          </List>
        </List>
      </List>
      <ListItem>And now we&apos;re are the top!</ListItem>
    </List>
  ))
  .add('Nested Ordered List', () => (
    <List type="ordered">
      <ListItem>Do this</ListItem>
      <ListItem>Then this</ListItem>
      <ListItem>Finally this</ListItem>
      <ListItem>Then we&apos;ll go one deeper</ListItem>
      <List type="ordered">
        <ListItem>Dillon</ListItem>
        <ListItem>Francis</ListItem>
        <List type="ordered">
          <ListItem>What if we went...</ListItem>
          <ListItem>One more deeper?</ListItem>
          <List>
            <ListItem>DJ</ListItem>
            <ListItem>Hanzel</ListItem>
            <List type="ordered">
              <ListItem>Five levels should be enough</ListItem>
              <ListItem>Right?</ListItem>
            </List>
          </List>
        </List>
      </List>
      <ListItem>But Don&apos; forget this</ListItem>
    </List>
  ))

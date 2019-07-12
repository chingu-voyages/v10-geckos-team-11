import React from 'react'
import { storiesOf } from '@storybook/react'

import Alert from '../src/Alert'

storiesOf('Alert/Dismissable', module)
  .add('default', () => <Alert dismissable id="dismissable-alert" />)
  .add('primary', () => (
    <Alert dismissable id="dismissable-alert-primary" color="primary" />
  ))
  .add('secondary', () => (
    <Alert dismissable id="dismissable-alert-secondary" color="secondary" />
  ))
  .add('success', () => (
    <Alert dismissable id="dismissable-alert-success" color="success" />
  ))
  .add('warning', () => (
    <Alert dismissable id="dismissable-alert-warning" color="warning" />
  ))
  .add('danger', () => (
    <Alert dismissable id="dismissable-alert-danger" color="danger" />
  ))

storiesOf('Alert/Not Dismissable', module)
  .add('default', () => <Alert />)
  .add('primary', () => <Alert color="primary" />)
  .add('secondary', () => <Alert color="secondary" />)
  .add('success', () => <Alert color="success" />)
  .add('warning', () => <Alert color="warning" />)
  .add('danger', () => <Alert color="danger" />)

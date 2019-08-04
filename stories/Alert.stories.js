import React from 'react'
import { storiesOf } from '@storybook/react'

import Alert from '../src/Alert'

storiesOf('Alert/Dismissable', module)
  .add('default', () => {
    return (
      <Alert dismissable id="dismissable-alert">
        Alert-default
      </Alert>
    )
  })
  .add('primary', () => (
    <Alert dismissable id="dismissable-alert-primary" color="primary">
      Alert-primary
    </Alert>
  ))
  .add('secondary', () => (
    <Alert dismissable id="dismissable-alert-secondary" color="secondary">
      Alert-secondary
    </Alert>
  ))
  .add('success', () => (
    <Alert dismissable id="dismissable-alert-success" color="success">
      Alert-success
    </Alert>
  ))
  .add('warning', () => (
    <Alert dismissable id="dismissable-alert-warning" color="warning">
      Alert-warning
    </Alert>
  ))
  .add('danger', () => (
    <Alert dismissable id="dismissable-alert-danger" color="danger">
      Alert-danger
    </Alert>
  ))

storiesOf('Alert/Not Dismissable', module)
  .add('default', () => <Alert>Alert-default</Alert>)
  .add('primary', () => <Alert color="primary">Alert-primary</Alert>)
  .add('secondary', () => <Alert color="secondary">Alert-secondary</Alert>)
  .add('success', () => <Alert color="success">Alert-success</Alert>)
  .add('warning', () => <Alert color="warning">Alert-warning</Alert>)
  .add('danger', () => <Alert color="danger">Alert-danger</Alert>)

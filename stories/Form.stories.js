import React from 'react'
import { storiesOf } from '@storybook/react'

import FormGroup from '../src/Form/FormGroup'
import Input from '../src/Form/Input'
import Label from '../src/Form/Label'
import TextArea from '../src/Form/TextArea'

storiesOf('Form', module)
  .add('FormGroup', () => (
    <FormGroup>
      <Label htmlFor="paperInputs1">Input</Label>
      <Input placeholder="Nice input" id="paperInputs1" />
    </FormGroup>
  ))
  .add('FormGroup block', () => (
    <div className="row">
      <div className="col sm-4">
        <FormGroup>
          <Label htmlFor="paperInputs2">Block Level</Label>
          <Input block id="paperInputs2" />
        </FormGroup>
      </div>
      <div className="col sm-8">
        <FormGroup>
          <Label htmlFor="paperInputs3">Block Level</Label>
          <Input block id="paperInputs3" />
        </FormGroup>
      </div>
    </div>
  ))
  .add('FormGroup disabled', () => (
    <FormGroup>
      <Label htmlFor="paperInputs4">Disabled</Label>
      <Input placeholder="Disabled" id="paperInputs4" disabled />
    </FormGroup>
  ))
  .add('TextArea', () => (
    <FormGroup>
      <Label>Large Input</Label>
      <TextArea placeholder="Large input"></TextArea>
    </FormGroup>
  ))
  .add('TextArea no resize', () => (
    <FormGroup>
      <Label>Large Input</Label>
      <TextArea placeholder="No resize" noResize></TextArea>
    </FormGroup>
  ))
  .add('Select', () => (
    <FormGroup>
      <Label htmlFor="paperSelects1">Select</Label>
      <select id="paperSelects1">
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </select>
    </FormGroup>
  ))
  .add('Radio', () => {
    return (
      <FormGroup renderAs="fieldset">
        <legend>Some Radio buttons</legend>
        <Label htmlFor="paperRadio1" radio>
          <Input
            type="radio"
            name="paperRadios"
            id="paperRadio1"
            value="option 1"
          />{' '}
          <span>This is the first option</span>
        </Label>
        <Label htmlFor="paperRadio2" radio>
          <Input
            type="radio"
            name="paperRadios"
            id="paperRadio2"
            value="option 2"
          />{' '}
          <span>This is the second option</span>
        </Label>
      </FormGroup>
    )
  })
  .add('Checkbox', () => (
    <FormGroup renderAs="fieldset">
      <legend>Some Check Boxes</legend>
      <Label htmlFor="paperChecks1" check>
        <Input
          type="checkbox"
          name="paperChecks"
          id="paperChecks1"
          value="option 1"
        />{' '}
        <span>This is the first check</span>
      </Label>
      <Label htmlFor="paperChecks2" check>
        <Input
          type="checkbox"
          name="paperChecks"
          id="paperChecks2"
          value="option 2"
        />{' '}
        <span>This is the second check</span>
      </Label>
    </FormGroup>
  ))

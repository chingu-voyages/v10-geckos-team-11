import React from 'react'
import { storiesOf } from '@storybook/react'

import Row from '../src/Layout/Row'
import Col from '../src/Layout/Col'

storiesOf('Layout', module)
  .add('3 equal length columns', () => (
    <Row>
      <Col className="border" col={4}>
        col-4 col
      </Col>
      <Col className="border" col={4}>
        col-4 col
      </Col>
      <Col className="border" col={4}>
        col-4 col
      </Col>
    </Row>
  ))
  .add('2 columns of different length', () => (
    <Row>
      <Col className="border" col={3}>
        col-3 col
      </Col>
      <Col className="border" col={9}>
        col-9 col
      </Col>
    </Row>
  ))
  .add('Responsive columns', () => (
    <Row>
      <Col className="border" sm={6} md={8} lg={10}>
        sm-6 md-8 lg-10 col
      </Col>
      <Col className="border" sm={6} md={4} lg={2}>
        sm-6 md-4 lg-2 col
      </Col>
    </Row>
  ))
  .add('Fill columns', () => (
    <Row>
      <Col className="border" sm={5}>
        sm-5 col
      </Col>
      <Col className="border" col="fill">
        col-fill col
      </Col>
      <Col className="border" col="fill">
        col-fill col
      </Col>
    </Row>
  ))
  .add('Left aligned', () => (
    <Row>
      <Col className="border" sm={4}>
        Aligned
      </Col>
      <Col className="border" sm={4}>
        Left (default)
      </Col>
    </Row>
  ))
  .add('Right aligned', () => (
    <Row flex="right">
      <Col className="border" sm={4}>
        Aligned
      </Col>
      <Col className="border" sm={4}>
        Right (flex-right)
      </Col>
    </Row>
  ))
  .add('Center aligned', () => (
    <Row flex="center">
      <Col className="border" sm={4}>
        Aligned
      </Col>
      <Col className="border" sm={4}>
        Center (flex-center)
      </Col>
    </Row>
  ))
  .add('Edges aligned', () => (
    <Row flex="edges">
      <Col className="border" sm={4}>
        Aligned
      </Col>
      <Col className="border" sm={4}>
        to edges (flex-edges)
      </Col>
    </Row>
  ))
  .add('Evenly spaced', () => (
    <Row flex="spaces">
      <Col className="border" sm={4}>
        Aligned
      </Col>
      <Col className="border" sm={4}>
        to be evenly spaced (flex-spaces)
      </Col>
    </Row>
  ))
  .add('Top aligned', () => (
    <Row flex="top">
      <Col className="border" sm={6}>
        Aligned top
      </Col>
      <Col className="border" sm={6}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lorem
        lectus, lobortis a nibh non, luctus luctus erat posuere. Curabitur ac
        turpis aliquam, malesuada elit suscipit, blandit dolor.
      </Col>
    </Row>
  ))
  .add('Middle aligned', () => (
    <Row flex="middle">
      <Col className="border" sm={6}>
        Aligned middle
      </Col>
      <Col className="border" sm={6}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lorem
        lectus, lobortis a nibh non, luctus luctus erat posuere. Curabitur ac
        turpis aliquam, malesuada elit suscipit, blandit dolor.
      </Col>
    </Row>
  ))
  .add('Bottom aligned', () => (
    <Row flex="bottom">
      <Col className="border" sm={6}>
        Aligned bottom
      </Col>
      <Col className="border" sm={6}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lorem
        lectus, lobortis a nibh non, luctus luctus erat posuere. Curabitur ac
        turpis aliquam, malesuada elit suscipit, blandit dolor.
      </Col>
    </Row>
  ))
  .add('Middle aligned', () => (
    <Row flex="middle">
      <Col className="border" sm={6}>
        Aligned middle
      </Col>
      <Col className="border" sm={6}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lorem
        lectus, lobortis a nibh non, luctus luctus erat posuere. Curabitur ac
        turpis aliquam, malesuada elit suscipit, blandit dolor.
      </Col>
    </Row>
  ))
  .add('Columns separately aligned', () => (
    <Row>
      <Col className="border" sm={3} align="bottom">
        Align bottom
      </Col>
      <Col className="border" sm={3} align="middle">
        Align middle
      </Col>
      <Col className="border" sm={3} align="top">
        Align top
      </Col>
      <Col className="border" sm="3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lorem
        lectus, lobortis a nibh non, luctus luctus erat posuere. Curabitur ac
        turpis aliquam, malesuada elit suscipit, blandit dolor.
      </Col>
    </Row>
  ))

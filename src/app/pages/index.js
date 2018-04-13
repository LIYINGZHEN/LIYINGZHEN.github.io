import React from 'react'
import styled from 'styled-components'

import Hero from '../src/components/hero'
import layout from '../src/components/layout'
import Container from '../src/components/container'
import Card from '../src/components/card'
import Row from '../src/components/row'

const H6 = styled.h6`
  margin: 0 auto;
`
const Index = () => (
  <div>
    <Hero />
    <hr />
    <br />
    <H6>
      <Container theme={{ width: '90%', justifyContent: 'center' }}>
        SELECTED WORK
      </Container>
    </H6>
    <Row>
      <Card image="static/imgs/calculating-bills.jpg">Hello</Card>
      <Card image="static/imgs/calculating-bills.jpg">Hello</Card>
    </Row>
    <Row>
      <Card image="static/imgs/calculating-bills.jpg">Hello</Card>
      <Card image="static/imgs/calculating-bills.jpg">Hello</Card>
    </Row>
  </div>
)

export default layout(Index)

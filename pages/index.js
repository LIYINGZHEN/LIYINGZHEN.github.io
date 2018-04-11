import React from 'react'

import Hero from '../src/components/hero'
import layout from '../src/components/layout'
import Card from '../src/components/card'
import Row from '../src/components/row'

const Index = () => (
  <div>
    <Hero />
    <Row>
      <Card image="../static/imgs/calculating-bills.jpg">Hello</Card>
      <Card image="../static/imgs/calculating-bills.jpg">Hello</Card>
    </Row>
    <Row>
      <Card image="../static/imgs/calculating-bills.jpg">Hello</Card>
      <Card image="../static/imgs/calculating-bills.jpg">Hello</Card>
    </Row>
  </div>
)

export default layout(Index)

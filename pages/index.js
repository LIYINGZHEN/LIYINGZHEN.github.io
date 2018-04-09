import React from 'react'

import Hero from '../src/components/hero'
import layout from '../src/components/layout'
import Card from '../src/components/card'

const Index = () =>
  <div>
    <Hero />
    <Card image='../static/imgs/calculating-bills.jpg'>
      Hello
    </Card>
  </div>

export default layout(Index)
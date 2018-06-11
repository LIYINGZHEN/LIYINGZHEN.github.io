import React from 'react'
import styled from 'styled-components'

import Hero from '../src/components/hero'
import layout from '../src/components/layout'
import Container from '../src/components/container'
import Row from '../src/components/row'
import Col from '../src/components/col'
import Card from '../src/components/card'

const H6 = styled.h6`
  margin: 0 auto;
`

const P = styled.p`
  text-align: center;
`

const A = styled.a`
  color: #84868b;
  background-color: transparent;
  border: 1px solid #84868b;
  padding: 1rem 2.5rem;
  border-radius: 4px;
  font-size: 1.5rem;
  line-height: 1;
  text-align: center;
  transition: opacity 0.2s ease;
  transform: scale(1);
  display: inline-block;
  &:hover {
    opacity: 0.8;
  }
`

const images = [
  {
    url: 'https://github.com/codefun-io/love-travel',
    img: 'https://goo.gl/p33L7A',
    title: 'Love Travel',
    category: 'Frotend',
    description: 'Travel website concept.'
  },
  {
    url: 'https://github.com/codefun-io/portfolio-concept',
    img: 'https://goo.gl/39VPVM',
    title: 'Hexon Creative',
    category: 'Frotend',
    description: 'Portfolio concept for Hexon.'
  },
  {
    url: 'https://github.com/codefun-io/traveltrip-landing-page',
    img: 'https://goo.gl/CcaeaJ',
    title: 'Travel Trip',
    category: 'Frotend',
    description: 'Landing page concept.'
  },
  {
    url: 'https://github.com/polo13999/nextAnt',
    img: 'https://goo.gl/UFiFXw',
    title: 'Next Ant',
    category: 'Frotend & Backend',
    description: 'Content Management System.'
  },
  {
    url: 'https://github.com/LIYINGZHEN/awesome-places',
    img: 'https://goo.gl/CwSVqf',
    title: 'Awesome Places',
    category: 'React Native',
    description: 'An app for sharing your favorite places.'
  }
]

const mapImg = images =>
  images.map(({ url, img, title, category, description }) => (
    <Card
      key={title}
      url={url}
      theme={{
        img,
        title,
        category,
        description
      }}
    />
  ))

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
    <br />
    <Container theme={{ marginTop: '2rem', width: '90%' }}>
      <Row>
        <Col>{mapImg(images.slice(0, 3))}</Col>
        <Col>{mapImg(images.slice(3, 5))}</Col>
      </Row>
    </Container>
    {/* <P>
      <A href="">
        See more work on Behance
      </A>
    </P> */}
    <br />
  </div>
)

export default layout(Index)

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
    img: 'https://jgog.in/app/301233416e364674c1306b37cdb189fe-1000.png',
    title: 'Biketinerary',
    category: 'Product Design',
    description: 'Explore a city using its bikeshare network.'
  },
  {
    img: 'https://jgog.in/app/57786d174bc78b9324b142228303a115-600.jpg',
    title: 'Central Park Conservancy',
    category: 'Central Park Conservancy',
    description: 'An intensive study to find the painpoints on the CPC website.'
  },
  {
    img: 'https://jgog.in/app/49c81bb12bf3c703634015e31d81812e-600.jpg',
    title: 'Reactive Particles',
    category: 'Interaction Design',
    description: 'A fun interactive installation for the SVA studio'
  },
  {
    img: 'https://jgog.in/app/d263cbad5d8aae6728b753f0b10bd18c-600.png',
    title: 'Super Co-Mario',
    category: 'Physical Computing',
    description: 'An experiment to play Super Mario without a controller.'
  },
  {
    img: 'https://jgog.in/app/3d25747b2317b4e57b23dfdb09722afc-800.png',
    title: 'Bill Splitter',
    category: 'Product Design',
    description:
      'Making it easier to split the bill and tip with multiple people.'
  },
  {
    img: 'https://jgog.in/app/3b439bd6b6433e2015f7f46aaff8f475-600.png',
    title: 'Mark43',
    category: 'Product Design • Design System',
    description: 'A story of fighting crime with design at my internship.'
  },
  {
    img: 'https://jgog.in/app/a81e2fefb16b3af58cdc884f78eaacc7-600.jpg',
    title: 'Cita',
    category: 'Concept Design',
    description: 'A chatbot to make plans for your friend circle.'
  },
  {
    img: 'https://jgog.in/app/e4e024fcef6150e0e5c2a9adb70a0271-600.jpg',
    title: 'Cosine',
    category: 'Physical Computing',
    description: 'A lighting installation.'
  }
]

const mapImg = images =>
  images.map(({ img, title, category, description }) => (
    <Card
      key={title}
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
        <Col>{mapImg(images.slice(0, 4))}</Col>
        <Col>{mapImg(images.slice(4, 8))}</Col>
      </Row>
    </Container>
    <P>
      <A target="_blank" href="">
        See more work on Behance
      </A>
    </P>
    <br />
  </div>
)

export default layout(Index)

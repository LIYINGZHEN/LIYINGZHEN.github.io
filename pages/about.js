import React from 'react'
import styled from 'styled-components'

import layout from '../src/components/layout'
import Container from '../src/components/container'
import Row from '../src/components/row'
import Image from '../src/components/image'
import Gallery from '../src/components/grally'
const Header = styled.div`
  padding: 2rem 0;
  text-align: center;
`

const Photo = styled.img`
  padding: 4rem 0;
  text-align: center;
`

const Desc = styled.div`
  padding: 0px 10px;
`
const Wrap = styled.div`
  flex: ${props => props.style.flex};
  display: flex;
  justify-content: center;
`

const WrapStart = styled.div`
  flex: ${props => props.style.flex};
  display: flex;
  justify-content: flex-start;
`

const Blockquote = styled.blockquote`
  display: block;
  background-color: #f3f3f3;
  padding: 1.5rem 2rem;
  border-left: 3px solid #d2d6dd;
`

const About = () => (
  <Container>
    <Header>
      <h2>about me</h2>
      <h4>code. experiment.</h4>
    </Header>

    <Row>
      <Wrap style={{ flex: 1 }}>
        <Image
          style={{
            image: 'http://dummyimage.com/400x500',
            width: '400px',
            height: '500px'
          }}
        />
      </Wrap>

      <Wrap style={{ flex: 3 }}>
        <Desc>
          <p>
            I have always been keen on “how stuff works” ever since I was
            little. I enjoy solving real and complex problems with design
            solutions and also implement those solutions (thanks to my
            engineering background). I've lead projects from start all the way
            to shipping.
          </p>

          <p>
            I believe that a well-delivered technology renders a new culture.
            Often in the beginning, the new culture is thought of as an
            alternative, but soon it transforms into the lived culture that many
            people share through interaction. Thinking about how technology
            could influence the way we live is my major interests.
          </p>

          <p>
            Currently I'm wrapping up my Master's degree at School of Visual
            Arts's Interaction Design program and searching for opportunities
            starting Summer 2018 and beyond. My experiences include Mark43
            (reinventing public safety software applications), Baxi.taxi
            (Bike-as-a-taxi service in India), Klip.in (Fashion discovery) &
            BookMyShow.com (India's #1 Entertainment Ticketing). Feel free to
            checkout my resume.
          </p>

          <p>
            When I’m not designing, I spend my time running, exploring the web,
            experimenting, traveling, volunteering, watching movies and
            listening to music.
          </p>
        </Desc>
      </Wrap>
    </Row>

    <Row>
      <WrapStart style={{ flex: 1 }}>
        <small>test</small>
      </WrapStart>
      <Blockquote cite="http://www.nytimes.com/2003/11/30/magazine/the-guts-of-a-new-machine.html">
        Most people make the mistake of thinking design is what it looks like.
        People think it's this veneer — that the designers are handed this box
        and told, 'Make it look good!' That's not what we think design is. It's
        not just what it looks like and feels like.
      </Blockquote>
    </Row>
    <Row>
      <Gallery />
    </Row>
  </Container>
)

export default layout(About)

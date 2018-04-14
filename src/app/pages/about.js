import React from 'react'
import styled from 'styled-components'

import layout from '../src/components/layout'
import Container from '../src/components/container'
import Row from '../src/components/row'
import Gallery from '../src/components/grally'

const Header = styled.div`
  padding: 4rem 0;
  text-align: center;
`

const Col1 = styled.div`
  flex: calc(8.33333% - 2rem);
  max-width: calc(8.33333% - 2rem);
  margin: 0 1rem 1rem;
  @media screen and (max-width: 768px) {
    flex: 0 1 100%;
    max-width: 100%;
  }
`
const Col4 = styled.div`
  flex: calc(33.33333% - 2rem);
  max-width: calc(33.33333% - 2rem);
  margin: 0 1rem 1rem;
  @media screen and (max-width: 768px) {
    flex: 0 1 100%;
    max-width: 100%;
  }
`
const Col6 = styled.div`
  flex: calc(50% - 2rem);
  max-width: calc(50% - 2rem);
  margin: 0 1rem 1rem;
  @media screen and (max-width: 768px) {
    flex: 0 1 100%;
    max-width: 100%;
  }
`

const Figure = styled.figure`
  overflow: hidden;
  margin: 0;
`

const Img = styled.img`
  display: block;
  transition: all 0.3s ease;
  margin: auto;
`

const About = () => (
  <section className="about">
    <Container theme={{ width: '90%', display: 'block' }}>
      <Header>
        <h2>about me</h2>
        <h4>design. code. experiment.</h4>
      </Header>

      <Row>
        <Col1 />
        <Col4>
          <Figure>
            <Img src="https://jgog.in/app/b14bfa1f5510d755c8bb8c326d405d26-600.jpg" />
          </Figure>
        </Col4>
        <Col6>
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
            Arts's <a>Interaction Design</a> program and searching for
            opportunities starting Summer 2018 and beyond. My experiences
            include Mark43 (reinventing public safety software applications),{' '}
            <a>Baxi.taxi</a> (Bike-as-a-taxi service in India), Klip.in (Fashion
            discovery) & <a>BookMyShow.com</a> (India's #1 Entertainment
            Ticketing). Feel free to checkout my <a>resume</a>.
          </p>
          <p>
            When I’m not designing, I spend my time running, exploring the web,
            experimenting, traveling, volunteering, watching movies and
            listening to music.
          </p>
        </Col6>
      </Row>
    </Container>
  </section>
)

export default layout(About)

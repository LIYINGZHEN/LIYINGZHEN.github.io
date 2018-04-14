import React from 'react'
import styled from 'styled-components'

import layout from '../src/components/layout'
import Container from '../src/components/container'
import Row from '../src/components/row'

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
  grid-row: ${props => props.theme && props.theme.gridRow};
`

const Img = styled.img`
  display: block;
  transition: all 0.3s ease;
  margin: auto;
`

const Blockquote = styled.blockquote`
  background-color: #f3f3f3;
  padding: 1.5rem 2rem;
  border-left: 3px solid #d2d6dd;
`

const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 33.33%);
  grid-gap: 1rem;
`

const PhotoDesc = styled.p`
  font-style: italic;
  text-align: center;
  font-size: 90%;
  margin-top: 1rem;
`

const photos = [
  {
    src: 'https://jgog.in/app/45b2b0fa61a3387ff07fb06cc6a284cf-750.jpg',
    desc: "Volunteering at IxDa '17",
    theme: { gridRow: '1/3' }
  },
  {
    src: 'https://jgog.in/app/2afc0357d4e28f97d6c1aa5af7cca83a-1000.jpg',
    desc: 'Planning the CPC research'
  },
  {
    src: 'https://jgog.in/app/45907a93719c000c1f93ec7ce30eefa4-1000.jpg',
    desc: 'Prototyping Super Co-mario'
  },
  {
    src: 'https://jgog.in/app/1be7ce1e81e3149a080f5439d9d5a816-1000.jpg',
    desc: 'Storyboarding'
  },
  {
    src: 'https://jgog.in/app/06975d1e23b11b344289d2af2f98ec81-1000.jpg',
    desc: 'User research for Cita'
  },
  {
    src: 'https://jgog.in/app/197dba536e913c1be504dfb598349a88-1000.jpg',
    desc: 'Paper prototyping'
  },
  {
    src: 'https://jgog.in/app/0420f9a0afb36744ba9e9109dfcc6662-1000.jpg',
    desc: 'Guest lecture with Jen Simmons'
  },
  {
    src: 'https://jgog.in/app/d90fe69b9d0757a91de522f8553d8194-1000.jpg',
    desc: 'Testing the prototype'
  },
  {
    src: 'https://jgog.in/app/a3e5b763bac40b23b0fb05ed5d9bbd59-1000.jpg',
    desc: 'Working on Biketinerary'
  },
  {
    src: 'https://jgog.in/app/bcce55a1630b88f53c5178c2ecfe855c-1000.jpg',
    desc: 'Shooting for Biketinerary'
  }
]

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

    <hr />

    <Container theme={{ width: '90%', display: 'block' }}>
      <small>This quote summarizes the way I work,</small>
      <Blockquote>
        Most people make the mistake of thinking design is what it looks like.
        People think it's this veneer — that the designers are handed this box
        and told, 'Make it look good!' That's not what we think design is. It's
        not just what it looks like and feels like.
        <strong> Design is how it works.</strong>
        <br />
        <small>— Steve Jobs</small>
      </Blockquote>

      <br />

      <Gallery>
        {photos.map(photo => (
          <Figure key={photo.src} theme={photo.theme}>
            <Img src={photo.src} />
            <PhotoDesc>{photo.desc}</PhotoDesc>
          </Figure>
        ))}
      </Gallery>
    </Container>
  </section>
)

export default layout(About)

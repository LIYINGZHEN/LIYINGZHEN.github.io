import React, { Fragment } from 'react'
import styled from 'styled-components'

import layout from '../src/components/layout'
import Row from '../src/components/row'
import Image from '../src/components/image'

const Header = styled.div`
  padding: 4rem 0;
  text-align: center;
`

const Photo = styled.img`
  padding: 4rem 0;
  text-align: center;
`

const Desc = styled.div`
  padding: 0px 10px;
  text-align: center;
`
const Wrap = styled.div`
  flex: ${props => props.style.flex};
  display: flex;

  justify-content: center;
`

const About = () => (
  <Fragment>
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
          I have always been keen on “how stuff works” ever since I was little.
          I enjoy solving real and complex problems with design solutions and
          also implement those solutions (thanks to my engineering background).
          I've lead projects from start all the way to shipping. I believe that
          a well-delivered technology renders a new culture. Often in the
          beginning, the new culture is thought of as an alternative, but soon
          it transforms into the lived culture that many people share through
          interaction. Thinking about how technology could influence the way we
          live is my major interests. Currently I'm wrapping up my Master's
          degree at School of Visual Arts's Interaction Design program and
          searching for opportunities starting Summer 2018 and beyond. My
          experiences include Mark43 (reinventing public safety software
          applications), Baxi.taxi (Bike-as-a-taxi service in India), Klip.in
          (Fashion discovery) & BookMyShow.com (India's #1 Entertainment
          Ticketing). Feel free to checkout my resume. When I’m not designing, I
          spend my time running, exploring the web, experimenting, traveling,
          volunteering, watching movies and listening to music.
        </Desc>
      </Wrap>
    </Row>
  </Fragment>
)

export default layout(About)

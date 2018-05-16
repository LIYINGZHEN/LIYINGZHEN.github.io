import React from 'react'
import styled from 'styled-components'

import Container from './container'

const H2 = styled.h2`
  font-weight: 300;
  @media screen and (max-width: 48rem) {
    font-size: 1.2em;
  }
`

const Small = styled.small`
  display: block;
  font-size: 0.65em;
  line-height: 1.8;
  @media screen and (max-width: 48rem) {
    font-size: 0.75em;
  }
`

const Hero = () => (
  <Container theme={{ minHeight: '200px', height: '50vh', width: '75vw' }}>
    <H2 style={{ fontWeight: '300' }}>
      Namaste 🙏
      <br />
      I'm Max, a <a href="">JavaScript developer</a> passionate about both
      frontend and backend development.
      <Small>
        I specialize in building <a href="https://reactjs.org">React.js</a> and{' '}
        <a href="https://nodejs.org">Node.js</a> apps.
      </Small>
      <Small>
        Recently, I'm learning
        <a href="https://www.apollographql.com"> Apollo GraphQL</a>
        ,
        <a href="https://developers.google.com/web/progressive-web-apps">
          {' '}
          Progressive Web App{' '}
        </a>
        and
        <a href="https://www.docker.com"> Docker</a> containerization.
      </Small>
      {/* <Small>
        I'm enthusiastic about{' '}
        <a href="">
          design tools
        </a>{' '}
        and{' '}
        <a href="">
          design systems
        </a>.
      </Small> */}
      {/* <Small>
        Also, I've made{' '}
        <a href="">
          free website themes
        </a>,{' '}
        <a href="">
          a CSS framework
        </a>,{' '}
        <a href="">
          a icon CDN
        </a>{' '}
        and{' '}
        <a href="">
          a Chrome extension
        </a>.
      </Small> */}
    </H2>
  </Container>
)

export default Hero

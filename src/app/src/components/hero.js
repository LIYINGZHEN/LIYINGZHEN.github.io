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
      I'm Max, a <a href="">JavaScript developer</a> passionate about full stack
      and blockchain development.
      <Small>
        I specialize in building <a href="https://reactjs.org">React</a>,{' '}
        <a href="https://redux.js.org/">Redux</a>,{' '}
        <a href="https://facebook.github.io/react-native">React Native</a>,{' '}
        <a href="https://solidity.readthedocs.io/">Solidity</a>,{' '}
        <a href="https://nodejs.org">Node</a> and{' '}
        <a href="https://www.apollographql.com">GraphQL</a> apps.
      </Small>
      <Small>
        I'm enthusiastic about <a href="https://goo.gl/amLg1Y">Testing</a> and{' '}
        <a href="https://goo.gl/uJh1qC">Automation</a>.
      </Small>
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

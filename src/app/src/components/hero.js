import React, { Component } from 'react'
import styled from 'styled-components'

import Container from './container'

const Small = styled.small`
  display: block;
  font-size: 0.65em;
  line-height: 1.8;
`

const Hero = () => (
  <Container theme={{ minHeight: '200px', height: '50vh', width: '75vw' }}>
    <h2 style={{ fontWeight: '300' }}>
      Namaste 🙏
      <br />
      I'm Jenil, a{' '}
      <a href="" target="_blank">
        computational designer
      </a>{' '}
      passionate about crafting great user experiences with a strong
      understanding of development.
      <Small>
        I'm enthusiastic about{' '}
        <a href="" target="_blank">
          design tools
        </a>{' '}
        and{' '}
        <a href="" target="_blank">
          design systems
        </a>.
      </Small>
      <Small>
        Also, I've made{' '}
        <a href="" target="_blank">
          free website themes
        </a>,{' '}
        <a href="" target="_blank">
          a CSS framework
        </a>,{' '}
        <a href="" target="_blank">
          a icon CDN
        </a>{' '}
        and{' '}
        <a href="" target="_blank">
          a Chrome extension
        </a>.
      </Small>
    </h2>
  </Container>
)

export default Hero

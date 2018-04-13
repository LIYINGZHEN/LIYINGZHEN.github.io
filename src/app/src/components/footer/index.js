import React, { Component } from 'react'
import styled from 'styled-components'
import Link from 'next/link'

import Container from '../container'
import LinkButton from '../link-button'
import IG from './ig'
import LinkedIn from './linkedIn'
import GitHub from './github'
import Be from './be'
import Medium from './medium'

const InnerBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Licence = styled.div`
  font-size: 0.9rem;
`

const Nav = styled.div`
  display: flex;
  min-height: 5rem;
`

const NavLeft = styled.p`
  flex: 1;
  display: flex;
  justify-content: flex-start;
`

const Colophon = styled.p`
  > * {
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }
`

const P = styled.p`
  display: block;
`

const Footer = () => (
  <Container
    className="footer"
    theme={{ display: 'block', margin: '5rem auto', width: '90%' }}
  >
    <Nav>
      <NavLeft>
        <LinkButton theme={{ paddingLeft: 0 }}>hello at jgog.in</LinkButton>
        <LinkButton>@geekGogari</LinkButton>
        <LinkButton>
          <IG />
        </LinkButton>
        <LinkButton>
          <LinkedIn />
        </LinkButton>
        <LinkButton>
          <GitHub />
        </LinkButton>
        <LinkButton>
          <Be />
        </LinkButton>
        <LinkButton>
          <Medium />
        </LinkButton>
      </NavLeft>
    </Nav>

    <Colophon className="colophon">
      <P>
        Crafted using <a>Chota</a>, <a>React.js</a>, <a>Next.js</a>,{' '}
        <a>Simple Icons</a> and <a>Visual Studio Code</a>. Typeface is{' '}
        <a>Inter UI</a>.
      </P>
      <P>Jenil Gogari © 2010 - 2018</P>
    </Colophon>
  </Container>
)

export default Footer

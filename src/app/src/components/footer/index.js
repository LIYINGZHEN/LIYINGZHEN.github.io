import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

import Container from '../container'
import LinkButton from '../link-button'
import IG from './ig'
import LinkedIn from './linkedIn'
import GitHub from './github'
import Be from './be'
import Medium from './medium'

const Nav = styled.div`
  display: flex;
  min-height: 5rem;
`

const NavLeft = styled.p`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  @media screen and (max-width: 480px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`

const Colophon = styled.div`
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
        <Link href="/">
          <LinkButton theme={{ paddingLeft: 0 }}>hello at jgog.in</LinkButton>
        </Link>
        <Link href="/">
          <LinkButton>@geekGogari</LinkButton>
        </Link>
        <Link href="/">
          <LinkButton>
            <IG />
          </LinkButton>
        </Link>
        <Link href="/">
          <LinkButton>
            <LinkedIn />
          </LinkButton>
        </Link>
        <Link href="/">
          <LinkButton>
            <GitHub />
          </LinkButton>
        </Link>
        <Link href="/">
          <LinkButton>
            <Be />
          </LinkButton>
        </Link>
        <Link href="/">
          <LinkButton>
            <Medium />
          </LinkButton>
        </Link>
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

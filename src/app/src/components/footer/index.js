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

const Footer = () => (
  <Container className="footer" theme={{ margin: '5rem auto', width: '90%' }}>
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

    {/* <InnerBlock>
      <Licence>Polo Max © 2018</Licence>
      <NavButton style={{ padding: '0.5rem' }}>
        <a>
          <IconButton
            style={{
              image: 'static/imgs/github.svg',
              width: '1rem',
              height: '1rem'
            }}
          />
        </a>
      </NavButton>
      <NavButton style={{ padding: 0 }}>
        <a>
          <IconButton
            style={{
              image: 'static/imgs/linkedin.svg',
              width: '1rem',
              height: '1rem'
            }}
          />
        </a>
      </NavButton>
    </InnerBlock> */}
  </Container>
)

export default Footer

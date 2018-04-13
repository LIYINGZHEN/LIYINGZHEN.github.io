import React, { Component } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import HomeIcon from './home-icon'
import Logo from './logo'

import LinkButton from '../link-button'
import Container from '../container'

const Wrapper = styled.nav`
  margin-top: 3rem;
  display: flex;
`

const NavLeft = styled.div`
  justify-content: flex-start;
`

const NavRight = styled.div`
  display: flex;
  flex: 1 1 auto;
  justify-content: flex-end;
`

const Nav = () => (
  <Wrapper className="main-nav nav">
    <Container theme={{ width: '90%' }}>
      <NavLeft className="nav-left">
        <Link href="/">
          <LinkButton>
            <div className="logo">
              <Logo style={{ width: '5rem', fill: '#28a386' }} />
            </div>
          </LinkButton>
        </Link>
      </NavLeft>

      <NavRight className="nav-right nav-menu">
        <Link href="/">
          <LinkButton>
            <HomeIcon />
          </LinkButton>
        </Link>
        <Link href="/artboards">
          <LinkButton>🎨&nbsp; Artboards</LinkButton>
        </Link>
        <Link href="/about">
          <LinkButton>🤓&nbsp; About</LinkButton>
        </Link>
        <Link href="/blog">
          <LinkButton>📝&nbsp; Blog</LinkButton>
        </Link>
        <Link href="/archive">
          <LinkButton>📥&nbsp; Archive</LinkButton>
        </Link>
      </NavRight>
    </Container>
  </Wrapper>
)

export default Nav

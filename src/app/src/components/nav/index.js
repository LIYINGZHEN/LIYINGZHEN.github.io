import React, { Component } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import HomeIcon from './home-icon'
import Logo from './logo'

import NavButton from './nav-button'
import IconButton from '../icon-button'
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
          <NavButton>
            <Logo className="logo" style={{ width: '5rem', fill: '#28a386' }} />
          </NavButton>
        </Link>
      </NavLeft>

      <NavRight className="nav-right nav-menu">
        <NavButton>
          <Link href="/">
            <HomeIcon />
          </Link>
        </NavButton>
        <NavButton>
          <Link href="/artboards">🎨&nbsp; Artboards</Link>
        </NavButton>
        <NavButton>
          <Link href="/about">🤓&nbsp; About</Link>
        </NavButton>
        <NavButton>
          <Link href="/blog">📝&nbsp; Blog</Link>
        </NavButton>
        <NavButton>
          <Link href="/archive">📥&nbsp; Archive</Link>
        </NavButton>
      </NavRight>
    </Container>
  </Wrapper>
)

export default Nav

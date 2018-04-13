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
            <div className="logo">
              <Logo style={{ width: '5rem', fill: '#28a386' }} />
            </div>
          </NavButton>
        </Link>
      </NavLeft>

      <NavRight className="nav-right nav-menu">
        <Link href="/">
          <NavButton>
            <HomeIcon />
          </NavButton>
        </Link>
        <Link href="/artboards">
          <NavButton>🎨&nbsp; Artboards</NavButton>
        </Link>
        <Link href="/about">
          <NavButton>🤓&nbsp; About</NavButton>
        </Link>
        <Link href="/blog">
          <NavButton>📝&nbsp; Blog</NavButton>
        </Link>
        <Link href="/archive">
          <NavButton>📥&nbsp; Archive</NavButton>
        </Link>
      </NavRight>
    </Container>
  </Wrapper>
)

export default Nav

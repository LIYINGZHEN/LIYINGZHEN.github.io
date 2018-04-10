import React, { Component } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import NavButton from '../components/nav-button'
import IconButton from './icon-button'
import Container from './container'

const Wrapper = styled.nav`
  margin-top: 30px;
`

const NavLeft = styled.div``

const NavRight = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`

const Logo = styled.div`
  width: 50px;
  height: 50px;
  background: url('../../static/imgs/logo.svg');
`

const Nav = () => (
  <Wrapper>
    <Container style={{ display: 'flex' }}>
      <NavLeft>
        <Link href="/">
          <IconButton
            style={{
              image: '../../static/imgs/logo.svg',
              width: '50px',
              height: '50px'
            }}
          />
        </Link>
      </NavLeft>

      <NavRight>
        <NavButton>
          <Link href="/">
            <a>
              <IconButton
                style={{
                  image: '../../static/imgs/home.svg',
                  width: '20px',
                  height: '20px'
                }}
              />
            </a>
          </Link>
        </NavButton>
        <NavButton>
          <Link href="/about">
            <a>About</a>
          </Link>
        </NavButton>
      </NavRight>
    </Container>
  </Wrapper>
)

export default Nav

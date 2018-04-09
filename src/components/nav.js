import React, { Component } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import IconButton from './icon-button'

const Wrapper = styled.nav`
  margin-top: 30px;
`

const Container = styled.div`
  display: flex;
  width: 90%;
  margin: 0 auto;
`

const NavLeft = styled.div``

const NavRight = styled.div`
`

const Logo = styled.img`
  width: 50px;
  height: 50px;
  background: url('../../static/imgs/logo.svg')
`

const Nav = () => (
  <Wrapper>
    <Container>
      <NavLeft>
        <Link href="/">
          <IconButton style={{ image: '../../static/imgs/logo.svg', width: '50px', height: '50px' }} />
        </Link>
      </NavLeft>
      <NavRight>

      </NavRight>
    </Container>
  </Wrapper>
)

export default Nav
      

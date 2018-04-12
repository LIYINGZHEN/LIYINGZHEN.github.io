import React, { Component } from 'react'
import styled from 'styled-components'
import Link from 'next/link'

import IconButton from './icon-button'
import NavButton from '../components/nav-button'

const Wrap = styled.footer`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  max-width: 80%;
  margin: 1.5rem auto;
`

const InnerBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Licence = styled.div`
  font-size: 0.9rem;
`

const Footer = () => (
  <Wrap>
    <InnerBlock>
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
    </InnerBlock>
  </Wrap>
)

export default Footer

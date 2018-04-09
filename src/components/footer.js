import React, { Component } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import IconButton from './icon-button'
import NavButton from '../components/nav-button'

const Wrap = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
`

const InnerBlock = styled.div`
  margin: ${props => props.style.margin};
  display: flex;
`

export default class Footer extends Component {
  render() {
    return (
      <Wrap>
        <InnerBlock style={{ margin: '10px' }}>
          <NavButton>
            <a>
              <IconButton
                style={{
                  image: '../../static/imgs/github.svg',
                  width: '20px',
                  height: '20px'
                }}
              />
            </a>
          </NavButton>
          <NavButton>
            <a>
              <IconButton
                style={{
                  image: '../../static/imgs/linkedin.svg',
                  width: '20px',
                  height: '20px'
                }}
              />
            </a>
          </NavButton>
        </InnerBlock>
        <InnerBlock style={{ margin: '0 0 10px 20px' }}>
          Polo Max © 2018
        </InnerBlock>
      </Wrap>
    )
  }
}

import React, { Component } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import IconButton from './icon-button'
import NavButton from '../components/nav-button'

const Wrap = styled.footer`
 flex:1;
display:flex;
`
const InnerBlock = styled.div`
      margin:10px;
      display:flex;
      
`
export default class Footer extends Component {
  render() {
    return (
      <Wrap>
        <InnerBlock>

          <NavButton>
            <a><IconButton style={{ image: '../../static/imgs/github.svg', width: '20px', height: '20px' }} /></a>
          </NavButton>

          <NavButton>
            <a><IconButton style={{ image: '../../static/imgs/linkedin.svg', width: '20px', height: '20px' }} /></a>
          </NavButton>


        </InnerBlock>

      </Wrap>
    )
  }
}

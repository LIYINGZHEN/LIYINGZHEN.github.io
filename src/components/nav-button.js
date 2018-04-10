import React, { Component } from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
  padding: 10px 20px;
  font-size: 1.4rem;
`

export default class NavButton extends Component {
  render() {
    return <Wrap>{this.props.children}</Wrap>
  }
}

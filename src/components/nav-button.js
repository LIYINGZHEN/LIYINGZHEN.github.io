import React, { Component } from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
   margin-left :10px;
`

export default class NavButton extends Component {
  render() {
    return (
      <Wrap>
        {this.props.children}
      </Wrap>
    )
  }
}

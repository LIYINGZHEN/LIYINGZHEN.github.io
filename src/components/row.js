import React, { Component } from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
      display:flex;
      padding:20px;
`

export default class Row extends Component {
  render() {
    return (
      <Wrap>
        {this.props.children}
      </Wrap>
    )
  }
}

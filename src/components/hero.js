import React, { Component } from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
     display:flex;
`
const Inner = styled.div`
  margin:10px;
  background:white;
  padding:30px;
  flex:1;
`

export default class Hero extends Component {
  render() {
    return (
      <Wrap>
        <Inner>
          here is hero
        </Inner>
      </Wrap>
    )
  }
}

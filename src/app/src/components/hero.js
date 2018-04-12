import React, { Component } from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
  display: flex;
  width: 75vw;
  margin: 0 auto;
  padding-top: 70px;
`

const Inner = styled.div`
  margin: 10px;
  background: white;
  padding: 30px;
  flex:1;
  font-size: 1.75em;
`

export default class Hero extends Component {
  render() {
    return (
      <Wrap>
        <Inner>
          Real sold my in call. Invitation on an advantages collecting. But event old above shy bed noisy. Had sister see wooded favour income has. Stuff rapid since do as hence. Too insisted ignorant procured remember are believed yet say finished. 
        </Inner>
      </Wrap>
    )
  }
}

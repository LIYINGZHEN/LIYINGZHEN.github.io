import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

let photoList = [
  { url: '', width: '300', height: '300', title: 'test', description: 'test' },
  { url: '', width: '300', height: '300', title: 'test', description: 'test' },
  { url: '', width: '300', height: '300', title: 'test', description: 'test' }
]

let CardBlock = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  margin: 20px;
`

const ShowBlock = photoList.map((v, i) => (
  <CardBlock key={`photo${i}${v}`}>
    <img src={`https://dummyimage.com/${v.width}x${v.height}`} />
  </CardBlock>
))

const Grally = () => <Wrapper>{ShowBlock}</Wrapper>

export default Grally

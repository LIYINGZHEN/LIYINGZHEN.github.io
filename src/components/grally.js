import React, { Component } from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
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

  background: #999;
  padding: 20px;
  margin: 20px;
`

class Grally extends Component {
  render() {
    let ShowBlock = photoList.map((v, i) => {
      return (
        <CardBlock key={`photo${i}${v}`}>
          <img src={`https://dummyimage.com/${v.width}x${v.height}`} />
        </CardBlock>
      )
    })

    return <Wrap>{ShowBlock}</Wrap>
  }
}
export default Grally

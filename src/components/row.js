import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
  display: flex;
  padding: 20px;
  justify-content: center;
  flex-wrap: wrap;
`

const Row = props => <Wrap>{props.children}</Wrap>

export default Row

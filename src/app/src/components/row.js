import React from 'react'
import styled from 'styled-components'

const Row = styled.div`
  display: flex;
  padding: ${props => (props.style && props.style.padding) || '20px'};
  justify-content: center;
  flex-wrap: wrap;
`

export default Row

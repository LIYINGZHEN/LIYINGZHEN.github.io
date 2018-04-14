import React from 'react'
import styled from 'styled-components'

const Col = styled.div`
  flex: 1;
  margin: 2rem;
  @media screen and (max-width: 768px) {
    flex: 0 1 100%;
    max-width: 100%;
  }
`

export default Col

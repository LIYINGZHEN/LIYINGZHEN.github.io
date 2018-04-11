import React, { Fragment } from 'react'
import styled from 'styled-components'

const Image = styled.div`
  background: url(${props => props.style.image});
  background-size: cover;
`

export default Image

import React, { Fragment } from 'react'
import styled from 'styled-components'

const Image = styled.img`
  width: ${props => props.style.width};
  height: ${props => props.style.height};
  background: url(${props => props.style.image});
  background-size: cover;
  border: none;
`

export default Image
